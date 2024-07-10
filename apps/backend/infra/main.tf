# provider "aws" {
#   region = "sa-east-1"
#   profile = ""
# }

# module "ec2-instance" {
#   source  = "terraform-aws-modules/ec2-instance/aws"
#   version = "5.6.1"

#   name = "athenas-backend-001"


#   ami = "ami-080111c1449900431"
#   instance_type = "t2.micro"
#   key_name = "athenas-backend-001-keypair"
#   monitoring = true


# }

provider "aws" {
  region = "us-east-1"
}
