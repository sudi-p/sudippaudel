FROM node:18-alpine

ENV NODE_ENV development

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app

COPY ./package.json /app

COPY ./package-lock.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]