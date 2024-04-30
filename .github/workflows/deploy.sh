#!/bin/bash
echo "Running deploy script"

TAG=$([ "$BRANCH" = "main" ] && echo "latest" || echo "dev")

echo "Logging in to AWS"
aws ecr get-login-password --region us-east-1 | \
docker login --username AWS --password-stdin "${AWS_ECR}"
echo "Logged in successfully"

echo "Building and tagging Docker image"
docker build -t readux-dev --no-cache .
docker tag readux-dev "${AWS_ECR}:${TAG}"

echo "Pushing image"
docker push "${AWS_ECR}:${TAG}"

echo "Pushed succesfully"