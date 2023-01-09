FROM node:16.14.0 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update -yqq \
    && apt-get -yqq install nasm

COPY . .

RUN npm install -q

ENV NODE_ENV=production

RUN npm run build

FROM node:16.14.0

ENV NODE_ENV=production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder ["/usr/src/app/next.config.js", "/usr/src/app/package.json", "./"]

EXPOSE 3000

CMD [ "npm", "run", "start" ]

