FROM node:8.7

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

RUN apt-get update && apt-get install sudo

RUN usermod -u 1000 node \
    && groupmod -g 1000 node \
    && chsh -s /bin/bash node \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/90-node \
    && chown -R 1000:1000 /usr/src/client

USER node

CMD npm install && printf "\n\n</> Project started </>\n" && tail -f /dev/null
