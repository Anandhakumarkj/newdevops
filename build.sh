#!/bin/bash

# Step 1: Build Docker image
docker build -t devopsproject .

# Step 2: Optional log message
echo "Hyyy"

# Step 3: Login to Docker Hub (avoid hardcoding password)
echo "Logging in to Docker Hub..."
echo "Anandha@2004" | docker login -u anandhakumarkj --password-stdin

# Step 4: Tag Docker image correctly
docker tag devopsproject anandhakumarkj/devopsproject

# Step 5: Push Docker image to Docker Hub
docker push anandhakumarkj/devopsproject

# Step 6: Apply Kubernetes Deployment and Service
kubectl apply -f deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false
