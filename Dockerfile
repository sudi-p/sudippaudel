FROM node:alpine

ENV NODE_ENV development

WORKDIR /app

COPY ./package.json /app

COPY ./package-lock.json /app

RUN npm install

ENV WDS_SOCKET_PORT=3001

ENV CHOKIDAR_USEPOLLING=true

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]