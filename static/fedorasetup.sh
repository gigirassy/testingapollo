#!/bin/bash

set -e

# Update system
sudo dnf update -y

# Set up RPM Fusion repositories
sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Swap ffmpeg-free with ffmpeg
sudo dnf swap -y ffmpeg-free ffmpeg --allowerasing

# Install rclone and cava
sudo dnf install -y rclone cava

# Set up Zen Browser repository and install Zen Browser
sudo dnf copr enable -y sneexy/zen-browser
sudo dnf install -y zen-browser

# Configure 8GB zram
sudo mkdir -p /etc/systemd
sudo tee /etc/systemd/zram-generator.conf > /dev/null <<EOF
[zram0]
zram-size = 8192
EOF

# Enable and start the zram service
sudo systemctl daemon-reexec
sudo systemctl restart systemd-zram-setup@zram0.service

echo "Setup complete."
