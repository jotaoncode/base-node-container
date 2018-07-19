# base-node-container

This is a simple nodejs docker container that has webpack with babel. It extends from the docker-node.

# Implementation

- Install docker

- Build your application with the name you define

$ docker build -t NAME .

- Run the application

Careful what ports you map so you have a proper out from your application

$ docker run -p 80:8080 NAME

You are exposing the docker container with the port 80 now
