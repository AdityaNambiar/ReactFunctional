# 27.13MB baseimage - alpine FTW
FROM node:lts-alpine3.9 
# After picking a base image, set the working directory.
WORKDIR nodeapi
# Copy the index.js & package.json file from the same directory where this Dockerfile resides at.
COPY . .
# Set up node_modules
RUN npm i
# Start API server
CMD ["node index.js"]
