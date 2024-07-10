output "public_ip" {
  value = aws_instance.server.public_ip
}

output "ec2_ssh" {
  value = aws_instance.server.associate_public_ip_address
}