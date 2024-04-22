FROM node:20.12.2-alpine AS builder

WORKDIR /app
COPY . /app/

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build

FROM pierrezemb/gostatic
COPY --from=builder /app/dist /srv/http


EXPOSE 8043

# 内部静态服务
# -fallback 用来指定 spa
CMD ["/goStatic", "-fallback" "/index.html"]

