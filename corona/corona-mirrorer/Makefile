.PHONY: deploy build

build:
	yarn --cwd src/ install

deploy:
	# https://cloud.google.com/sdk/gcloud/reference/beta/functions/deploy
	gcloud functions deploy corona-mirrorer \
	--entry-point app \
	--source src/ \
	--runtime nodejs10 \
	--trigger-http \
	--allow-unauthenticated
