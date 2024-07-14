resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = "athenas-bucket-${var.bucket_env}"
    Environment = var.bucket_env
    Repo        = var.repo
  }
}