#!/bin/bash

git clone https://github.com/bensonirah/sikaradev-academy-frm.git

cd sikaradev-academy-frm

npm install

docker build -t sda-env .