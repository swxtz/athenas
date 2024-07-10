resource "aws_key_pair" "keypair" {
  public_key = file("./keys/athenas.pub")
}