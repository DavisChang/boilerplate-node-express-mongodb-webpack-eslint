# boilerplate-node-express-mongodb-webpack-eslint

Node + Express + MongoDB + Webpack + Eslint

### Start Project

```
$ npm install
$ docker run -d -p 27017:27017 -v $(pwd)/database:/data/db mongo
$ npm start
```

### Docker run mongoDB

```
$ docker run -d -p 27017:27017 -v $(pwd)/database:/data/db mongo
```

### Eslint

```
$ npm run eslint
$ npm run eslint-fix
```

### Production

```
$ npm run build
$ npm run prod
```


