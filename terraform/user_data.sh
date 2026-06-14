

apt update -y

# Install Docker
apt install docker.io -y

# Start Docker
systemctl start docker
systemctl enable docker

usermod -aG docker ubuntu

# Install Docker Compose
apt install docker-compose-v2 -y