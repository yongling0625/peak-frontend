FROM node:12.16.1-alpine

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN npm install --registry=https://registry.npm.taobao.org

COPY ./ ./

CMD ["npm", "run", "build-prod"]
