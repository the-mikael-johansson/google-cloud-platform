CONTAINER_NAME=corona-service-container

.PHONY: deploy build

build:
	yarn --cwd src/ install

deploy:
	# https://cloud.google.com/sdk/gcloud/reference/beta/functions/deploy
	gcloud functions deploy corona-source \
	--entry-point app \
	--source src/ \
	--runtime nodejs8 \
	--trigger-http \
	--allow-unauthenticated



.PHONY: build
build:
	docker build -t ${CONTAINER_NAME} .

.PHONY: docker-run
docker-run:
	docker run -d \
	-e GOOGLE_APPLICATION_CREDENTIALS="./credentials-service-account.json" \
	-p 8080:8080 $(CONTAINER_NAME) start

.PHONY: docker-stop
docker-stop:
	docker stop $(shell docker ps -a -q)

.PHONY: docker-restart
docker-restart: docker-stop docker-run
	@echo "Restarted"
	docker ps