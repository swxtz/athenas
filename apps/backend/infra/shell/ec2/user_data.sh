#!/bin/bash

sudo su

# update and install docker
yum update -y
yum install -y docker
service docker start

# give ec2 user to run docker
usermod -a -G docker ec2-user

# run service ...
# docker run -p 80:3000 swxtz/athenas-backend:latest