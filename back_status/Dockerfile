FROM node:14

WORKDIR /app_back

COPY package*.json /
COPY .env /.env
COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]