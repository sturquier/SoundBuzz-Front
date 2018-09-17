FROM node:8.12.0-alpine

RUN mkdir /code
ADD . /code/

WORKDIR /code

RUN npm install -g @angular/cli \ 
 && npm install \
 && yarn install

EXPOSE 4200

CMD ng serve