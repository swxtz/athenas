data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  # filter {
  #   name   = "virtualization-type"
  #   values = ["hvm"]
  # }

  owners = ["099720109477"] # Canonical

}


resource "aws_instance" "server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type

  // http acess roles
  vpc_security_group_ids = [aws_security_group.security_group.id]
  
  #user_data = file("./shell/ec2/user_data.sh")]]
  
  key_name = aws_key_pair.keypair.key_name
  tags = {
    Name        = var.name
    Environment = var.env
    Provisioner = "Terraform"
    repo        = var.repo
  }
}