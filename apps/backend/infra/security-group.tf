resource "aws_security_group" "security_group" {
  name = "athenas_security_group"
  description = "Allow inbound traffic from and 80"

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 50000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}