
## PreRequisites

- Docker
- docker-compose
- Node.js 8.0 or above

## Setting up local dev environment

#### Installing Prisma CLI

```
$ npm i -g prisma
```

To start Prisma server locally with MYSQL database
```
$ docker-compose up -d
```

After the prisma server has started, run:
```
$ prisma deploy
```


Then start backend server:
```

$ yarn && yarn dev
```
#### Server is running on http://localhost:4000