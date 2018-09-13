FROM node:8.12.0-alpine

RUN mkdir /code \
 && npm install -g @angular/cli  

ADD . /code/

RUN npm install \
 && yarn install

EXPOSE 4200