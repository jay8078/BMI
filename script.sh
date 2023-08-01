#!/bin/bash

export VAR=/home/dev/text1

echo ${VAR}

echo 'VARI = "/home/dev/text2"' >> /etc/environment

source /etc/environment

echo ${VARI}

echo 'VARIA= "/home/dev/text3"' >> ~/.bashrc

source ~/.bashrc

echo ${VARIA}
