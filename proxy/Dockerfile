FROM node:8.11.1

RUN mkdir -p /docker/app

WORKDIR /docker/app

COPY  . /docker/app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "docker"]
