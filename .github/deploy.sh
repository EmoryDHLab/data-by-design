#!/bin/bash
echo "Running deploy script"
echo "Building and hydrating"
npm run build
npx arc hydrate

echo "Zipping up Lambda function"
cd server
zip -r $DEPLOY_PACKAGE ./* > /dev/null

echo "Uploading Lambda code to S3"
aws s3api put-object --bucket $DEPLOY_BUCKET --key $DEPLOY_PACKAGE --body "${PWD}/${DEPLOY_PACKAGE}" > /dev/null

echo "Uploading Static files to S3"
cd ../public
aws s3 rm s3://$STATIC_BUCKET --recursive
aws s3 cp . s3://$STATIC_BUCKET/ --recursive

echo "Updating Lambda function"
aws lambda update-function-code --function-name $LAMBDA_FUNCTION --s3-bucket $DEPLOY_BUCKET --s3-key $DEPLOY_PACKAGE > /dev/null

echo "Updated Lambda function succesfully"

echo "All done!"
