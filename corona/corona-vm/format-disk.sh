#!/bin/bash

sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb

sudo mkdir -p /mnt/disks/storage

sudo mount -o discard,defaults /dev/sdb /mnt/disks/storage/

sudo chmod a+w /mnt/disks/storage/

sudo cp /etc/fstab /etc/fstab.backup

sudo blkid /dev/sdb

echo UUID=`sudo blkid -s UUID -o value /dev/sdb` /mnt/disks/storage ext4 discard,defaults,nofail 0 2 | sudo tee -a /etc/fstab
