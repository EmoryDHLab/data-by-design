FROM node:20.12.1-slim
WORKDIR /dxd
COPY . .
RUN rm package-lock.json
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]