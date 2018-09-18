FROM node:8.12.0-alpine

RUN mkdir /code
ADD . /code/

WORKDIR /code

RUN npm rebuild node-sass
RUN npm install -g @angular/cli
RUN npm install

EXPOSE 4200

CMD ["ng","serve"]