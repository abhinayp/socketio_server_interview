FROM node:18
SHELL ["/bin/bash", "-c"]
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
ENTRYPOINT [ "./entrypoint.sh" ]
CMD [ "run" ]
