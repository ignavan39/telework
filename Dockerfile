FROM node:14.14.0

WORKDIR /usr/app/

COPY package*.json ./
COPY yarn.*lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["node", 'index.js']