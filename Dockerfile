FROM node:14.17.6

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY main.js ./src/
COPY models ./src/models/

CMD [ "node", "./src/main.js" ]
