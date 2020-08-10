FROM node

EXPOSE 3000
EXPOSE 5000
EXPOSE 50051

WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm install --only=development

#RUN npm i grpc

COPY . .

#RUN npm run build

#RUN npm run build

