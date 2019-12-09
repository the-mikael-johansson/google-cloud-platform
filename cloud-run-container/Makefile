
# Inspiration: https://github.com/googleforgames/open-match/blob/master/Makefile

PROJECT_ID = spring-container-1337
CONTAINER_NAME = spring-boot-container
SERVICE_NAME = $(CONTAINER_NAME)-service
APP_DIR = spring-boot-rest-api

.PHONY: all clean-all build deploy docker-run deploy
.PHONY: docker-stop docker-remove

all: build deploy

clean-local:
	cd $(APP_DIR) && \
    	make clean

clean-all: clean-local docker-remove
	gsutil rm -r gs://eu.artifacts.$(PROJECT_ID).appspot.com
	gsutil rm -r gs://$(PROJECT_ID)_cloudbuild

build:
	cd $(APP_DIR) && \
	make build
	docker build -t spring-boot-container .
	docker image ls

deploy:
	gcloud builds submit --tag eu.gcr.io/$(PROJECT_ID)/$(CONTAINER_NAME)
	gcloud run deploy $(SERVICE_NAME) --image eu.gcr.io/$(PROJECT_ID)/$(CONTAINER_NAME) --platform managed \
	--region europe-west1 \
	--allow-unauthenticated


docker-run:
	docker run -p 5000:8080 spring-boot-container

docker-stop:
	docker stop $(shell docker ps -a -q)

docker-remove: docker-stop
	docker rm $(shell docker ps -a -q)