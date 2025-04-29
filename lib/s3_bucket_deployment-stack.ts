import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Source, BucketDeployment } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class S3BucketDeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 既存S3バケットを取得
    const existing_bucket = Bucket.fromBucketArn(
      this,
      "cdk-s3-bucket-deployemnt-test-nk",
      "arn:aws:s3:::cdk-s3-bucket-deployemnt-test-nk"
    );

    const uploadObjectsToS3Bucket: BucketDeployment = new BucketDeployment(this, "uploadObjectsToS3Bucket", {
      sources: [Source.asset("bucket_objects")],
      destinationBucket: existing_bucket,
    });
  }
}
