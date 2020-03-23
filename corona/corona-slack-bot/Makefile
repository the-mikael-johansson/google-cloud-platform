FUNCTION_NAME ?= corona-slack-bot
SOURCE_URL ?= https://us-central1-<YOUR_PROJECT_ID>.cloudfunctions.net/corona-source/coronas/summary

.PHONY: deploy build

build:
	yarn --cwd src/ install

deploy:
	# https://cloud.google.com/sdk/gcloud/reference/beta/functions/deploy
	gcloud functions deploy $(FUNCTION_NAME) \
	--entry-point app \
	--source src/ \
	--runtime nodejs8 \
	--trigger-http \
	--allow-unauthenticated \
	--set-env-vars SOURCE_URL=$(SOURCE_URL)/
