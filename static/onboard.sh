#!/bin/bash

set -e  # Exit on error
set -u  # Treat unset variables as errors

# Step 1: Install dependencies
sudo dnf install -y \
  python3-devel \
  python3-distutils-extra \
  dconf-devel \
  libcanberra-devel \
  libxkbfile-devel \
  libXtst-devel \
  libX11-devel \
  hunspell-devel \
  intltool \
  python3-dbus \
  systemd-devel \
  desktop-file-utils \
  gcc \
  gcc-c++

# Step 2: Set C standard to avoid C23 keyword issues
export CFLAGS="-std=gnu11"

# Step 3: Clone and build Onboard
git clone https://github.com/dr-ni/onboard
cd onboard
python3 setup.py clean
python3 setup.py build

# (Optional) Install system-wide:
# sudo python3 setup.py install
