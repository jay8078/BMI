#!/bin/bash

export VAR=/home/dev/text1

echo 'VARI = "/home/dev/text2"' >> /etc/environment

source /etc/environment

echo 'VARIA= "/home/dev/text3"' >> ~/.bashrc

source ~/.bashrc
