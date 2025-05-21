#!/bin/bash
set -e
echo "Running deploy script"

REMOTE_PATH=$([ "$BRANCH" == "main" ] && echo $PROD_REMOTE_PATH || echo $DEV_REMOTE_PATH)
RESTART_COMMAND=$([ "$BRANCH" == "main" ] && echo $PROD_RESTART_COMMAND || echo $DEV_RESTART_COMMAND)

echo "Building"
npm run build

echo "Copying Files"
files=("./build" "./package.json" "./server.*" "./server" "./node_modules")
for file in "${files[@]}"; do
  echo "Copying ${file} to ${REMOTE_PATH}"
  rsync -avze "ssh" ${file} ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}
done

echo "Running Remote Script"
ssh ${REMOTE_USER}@${REMOTE_HOST} ${RESTART_COMMAND}
