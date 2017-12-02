FROM node:8.7-alpine

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

# Prevent the reinstallation of node modules at every changes in the source code
COPY package.json package-lock.json ./
RUN npm install

COPY . ./

CMD npm start