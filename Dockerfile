FROM node:12.6.1-alpine

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

CMD ["npm", "run", "build-prod"]
