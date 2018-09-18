FROM node:8.12.0-alpine

RUN mkdir /code
ADD . /code/

WORKDIR /code

RUN npm install -g @angular/cli \ 
 && npm rebuild node-sass \
 && npm install

EXPOSE 4200

CMD ["/code ng serve -H 0.0.0.0"]