#!/bin/bash
docker build -t task37 .
echo Hyyy
docker login -u anandhakumarkj -p Anandha@2004
docker tag devopsproject anandhakumarkj/devopsproject
docker push anandhakumarkj/devopsproject
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
