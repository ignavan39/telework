#!/usr/app/env bash

set -e

docker build -t telework .
docker run -p 49160:8080 -d telework