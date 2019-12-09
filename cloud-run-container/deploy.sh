#!/bin/bash

PROJECT_ID=spring-container-1337
CONTAINER_NAME=spring-boot-container

# Push to Container Registry
gcloud builds submit --tag eu.gcr.io/$PROJECT_ID/$CONTAINER_NAME

# Deploy (may take some minutes)
gcloud run deploy --image eu.gcr.io/$PROJECT_ID/$CONTAINER_NAME --platform managed
#gcloud run deploy --image eu.gcr.io/spring-container-1337/spring-boot-container --platform managed