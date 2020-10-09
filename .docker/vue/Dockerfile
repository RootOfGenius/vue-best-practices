# develop stage
FROM node:11.10-alpine as develop-stage
MAINTAINER "HieuDT" <duong.trung.hieu@sun-asterisk.com>
WORKDIR /app
COPY . .
RUN cd client && yarn


# build stage
FROM develop-stage as build-stage
RUN cd client && yarn build

# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
