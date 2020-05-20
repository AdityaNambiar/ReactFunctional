# 27MB baseimage - alpine FTW
FROM node:14.0.0-alpine3.11 
# After picking a base image, set the working directory.
WORKDIR /webserver
# Copy the index.js & package.json file from the same directory where this Dockerfile resides at.
COPY build build
COPY webserver .
# Set up node_modules
RUN node -v
RUN rm -rf node_modules 
#RUN npm cache clean --force
RUN yarn config set ignore-engines true
RUN yarn install 

# Start Web server
EXPOSE 8080
CMD ["node", "index.js"]
