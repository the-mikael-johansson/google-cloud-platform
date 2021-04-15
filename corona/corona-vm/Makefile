IMAGE_NAME=ubuntu-1910-eoan-v20200331
IMAGE_PROJECT=ubuntu-os-cloud
VM_NAME=corona-vm

VM_FAMILY=ubuntu-1910
FREE_TIER_ZONE=us-west1-a
FREE_DISK_SIZE=5

IMAGE_NAME=ubuntu-1910-eoan-v20200413a
CONTAINER_IMAGE=corona-service-container

DISK_NAME=corona-secondary-disk

.PHONY: create-disk
create-disk:
	gcloud compute disks create $(DISK_NAME) \
    --size 10 \
    --type pd-standard \
    --zone $(FREE_TIER_ZONE)

.PHONY: create
create:
	gcloud compute images describe $(IMAGE_NAME) --project $(IMAGE_PROJECT)

	gcloud compute instances create $(VM_NAME) \
    --image $(IMAGE_NAME) \
    --image-project ubuntu-os-cloud \
    --zone $(FREE_TIER_ZONE) \
    --machine-type f1-micro \
    --metadata-from-file startup-script=install.sh

	gcloud compute instances attach-disk $(VM_NAME) \
    --disk $(DISK_NAME)

	gcloud compute instances describe $(VM_NAME)


# TODO: add firewall rules