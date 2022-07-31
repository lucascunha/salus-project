FROM node:15

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm init --y && npm install express --save && npm i --S express pug && npm install mysql2 && npm install --save sequelize && npm install mysql2-promise --save

COPY . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

#CMD [ "node", "./node/index.js" ]