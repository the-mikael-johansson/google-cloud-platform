#!/bin/bash
export PATH=$PATH:/mnt/disks/storage/bin

mkdir -p /mnt/disks/storage/bin/

sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /mnt/disks/storage/bin/docker-compose
sudo chmod +x /mnt/disks/storage/bin/docker-compose
docker-compose --version


sudo curl -fsSL https://get.docker.com -o -o /mnt/disks/storage/bin/get-docker.sh
sudo sh get-docker.sh

# https://cloud.google.com/container-registry/docs/advanced-authentication

gcloud auth activate-service-account ACCOUNT --key-file=KEY-FILE

VERSION=2.0.0
OS=linux  # or "darwin" for OSX, "windows" for Windows.
ARCH=amd64  # or "386" for 32-bit OSs, "arm64" for ARM 64.
sudo curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v${VERSION}/docker-credential-gcr_${OS}_${ARCH}-${VERSION}.tar.gz" \
| tar xz --to-stdout ./docker-credential-gcr \
> /usr/local/bin/docker-credential-gcr && chmod +x /usr/local/bin/docker-credential-gcr

sudo docker-credential-gcr configure-docker

# todo: sudo docker pull

# End of docker install


echo "Done" > ~/log.txt