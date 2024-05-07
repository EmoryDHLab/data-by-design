#!/bin/bash
echo "Running deploy script"
TAG=$([ "$BRANCH" == "main" ] && echo "latest" || echo "dev")

echo "Logging in to AWS"
aws ecr get-login-password --region us-east-1 | \
docker login --username AWS --password-stdin "${AWS_ECR}"
echo "Logged in successfully"

echo "Building Docker image for ${BRANCH}"
if [ "$BRANCH" == "main" ]; then
  docker build -t data-by-design --no-cache .
else
  docker build -t data-by-design --no-cache --file Dockerfile-dev .
fi

echo "Tagging image with ${TAG}"
docker tag data-by-design "${AWS_ECR}/data-by-design:${TAG}"

echo "Pushing image"
docker push "${AWS_ECR}/data-by-design:${TAG}"

echo "Pushed succesfully"