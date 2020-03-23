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
