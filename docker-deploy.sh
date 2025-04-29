#!/bin/bash

APP_VERSION=1.0.0
BUILD_DATE=$(date +%y%m%d.%H%M%S)
TAG="${APP_VERSION}-${BUILD_DATE}"
IMAGE_NAME="chatflow/fe:${TAG}"

echo "Building Docker image: $IMAGE_NAME"

docker build \
  --build-arg APP_VERSION=$APP_VERSION \
  --build-arg BUILD_DATE=$BUILD_DATE \
  -t $IMAGE_NAME .

echo "Pushing Docker image to Docker Hub..."
docker push $IMAGE_NAME

echo "Done! Pushed as $IMAGE_NAME"