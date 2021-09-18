FROM node:14.17.6

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY main.js ./src/

CMD [ "node", "./src/main.js" ]
