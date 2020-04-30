# 27MB baseimage - alpine FTW
FROM node:14.0.0-alpine3.11 
# After picking a base image, set the working directory.
WORKDIR /nodeapi
# Copy the index.js & package.json file from the same directory where this Dockerfile resides at.
COPY . .
# Set up node_modules
RUN npm i
# Start API server
RUN node -v

EXPOSE 5000
CMD ["/usr/local/bin/node", "index.js"]
