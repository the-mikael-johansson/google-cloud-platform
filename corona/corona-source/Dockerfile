FROM node:10-alpine

# Create app directory
WORKDIR /app

#COPY src/package*.json /app/

RUN yarn install

COPY src/ /app/

COPY credentials-service-account.json /app

EXPOSE 8080

ENTRYPOINT [ "yarn" ]

CMD [ "run", "start" ]
