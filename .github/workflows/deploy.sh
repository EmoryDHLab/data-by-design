#!/bin/bash
echo "Running deploy script"
echo "!!!! ${BRANCH_VAR} !!!!"
TAG=$([ "$BRANCH" = "main" ] && echo "latest" || echo "dev")

echo "Logging in to AWS"
aws ecr get-login-password --region us-east-1 | \
docker login --username AWS --password-stdin "${AWS_ECR}"
echo "Logged in successfully"

echo "Would tag image as ${AWS_ECR}/data-by-design:${TAG}"
echo "Bransh is ${BRANCH}"

echo "Building and tagging Docker image"
docker build -t data-by-design --no-cache .
docker tag data-by-design "${AWS_ECR}/data-by-design:${TAG}"

echo "Pushing image"
docker push "${AWS_ECR}/data-by-design:${TAG}"

echo "Pushed succesfully"