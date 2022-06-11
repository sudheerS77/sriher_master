FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGODB_URL=mongodb+srv://sudheer:Pssword123@cluster0.wh9d1.mongodb.net/DB?retryWrites=true&w=majority
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build


CMD ["npm", "run", "start"]