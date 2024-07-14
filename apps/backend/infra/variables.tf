variable "name" {
  description = "The name of the EC2 instance"
  default     = "athenas-backend-server"
}

variable "env" {
  description = "The environment of the EC2 instance"
  default     = "dev"
}

variable "repo" {
  description = "The source of the EC2 instance"
  default     = "https://github.com/swxtz/athenas"
}

variable "ami" {
  description = "The AMI to use for the EC2 instance"
  default     = "ami-06c68f701d8090592"
}

variable "instance_type" {
  description = "The type of EC2 instance to launch"
  default     = "t2.micro"
}

variable "key_name" {
  description = "The key pair to use for the EC2 instance"
  default     = "athenas-server"
}

variable "bucket_name" {
  description = "The name of the S3 bucket"
  default     = "athenas-backend-bucket"
  
}

variable "bucket_env" {
  description = "The environment of the S3 bucket"
  default     = "dev"
}