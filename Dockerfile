FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d
RUN chown nginx:nginx /usr/share/nginx/html/*
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]