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
  default     = "ami-080111c1449900431"
}

variable "instance_type" {
  description = "The type of EC2 instance to launch"
  default     = "t2.micro"
}

variable "key_name" {
  description = "The key pair to use for the EC2 instance"
  default     = "athenas-server"
}