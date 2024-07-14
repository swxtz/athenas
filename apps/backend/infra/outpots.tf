output "public_ip" {
  value = aws_instance.server.public_ip
}

output "ec2_ssh" {
  value = aws_instance.server.associate_public_ip_address
}

output "bucket_name" {
  value = aws_s3_bucket.bucket.bucket
}

output "bucket_url" {
  value = aws_s3_bucket.bucket.website_endpoint
}