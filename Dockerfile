FROM node:10-alpine

RUN mkdir src
WORKDIR /src

RUN apk update && \
    npm install -g npm \
    npm install -g @vue/cli \
    npm install -g firebase-tools \
    npm update
    
RUN rm -rf ./app/node_modules
RUN rm -f ./app/*.lock
RUN rm -f ./functions/*.lock
RUN rm -rf ./functions/node_modules

COPY /src /src

# settings for runtime emulator
ENV HOST 0.0.0.0
EXPOSE 5000

# settings for Firebase login
EXPOSE 9005

CMD ["/bin/ash"]