FROM mhart/alpine-node:8

WORKDIR /picky
COPY . /picky

EXPOSE 80

CMD ["npm", "run", "deploy"]
