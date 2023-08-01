#!/bin/bash

echo "VAR=/home/dev/text1" >> $GITHUB_OUTPUT

VARI=$(cat $GITHUB_OUTPUT | grep -o 'VAR=.*' | cut -d'=' -f2)

echo 'VARI = "/home/dev/text2"' >> /etc/environment

source /etc/environment

echo ${VARI}

echo 'VARIA= "/home/dev/text3"' >> ~/.bashrc

source ~/.bashrc

echo ${VARIA}
