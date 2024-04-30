#!/bin/bash
echo "Running deploy script"

TAG=$([ "$BRANCH" = "main" ] && echo "latest" || echo "dev")

echo "Logging in to AWS"
aws ecr get-login-password --region us-east-1 | \
docker login --username AWS --password-stdin "${AWS_ECR}"
echo "Logged in successfully"

echo "Would tag image as ${AWS_ECR}:${TAG}"
echo "Bransh is ${BRANCH}"

echo "Building and tagging Docker image"
docker build -t dxd --no-cache .
docker tag dxd "${AWS_ECR}:${TAG}"

echo "Pushing image"
docker push "${AWS_ECR}:${TAG}"

echo "Pushed succesfully"