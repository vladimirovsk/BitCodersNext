FROM node:18.16.0

WORKDIR /app

RUN apt-get update -yqq \
    && apt-get -yqq install nasm

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm install -g create-react-app

RUN npm install react-scripts


#ENV NODE_ENV=production

#RUN npm run build

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]

