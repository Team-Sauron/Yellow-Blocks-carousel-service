FROM node:12
WORKDIR /usr/src/app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build
RUN npm run seed
EXPOSE 3001
CMD ["npm", "start"]
