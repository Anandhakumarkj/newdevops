#!/bin/bash
docker build -t devopsproject .
echo Hyyy
docker login -u anandhakumarkj -p Anandha@2004
docker tag devopsproject anandhakumarkj/newdevops
docker push anandhakumarkj/newdevops
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
