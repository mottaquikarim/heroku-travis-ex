# Deployed App via Heroku with Travis as CI/CD

This repo contains a tutorial for getting set up with NodeJS project that runs on Heroku, is deployable via Travis, and is validated with unit tests with Jest.

## Heroku

First, create an account with **[heroku](https://signup.heroku.com/)**.

### Installing Heroku locally

For **MAC** users:

```
$ brew install heroku/brew/heroku
```

For **WINDOWS** users:

1. **64 bit**: https://cli-assets.heroku.com/heroku-x64.exe
2. **32 bit**: https://cli-assets.heroku.com/heroku-x86.exe

### Logging in

```
$ heroku login
```

This should open up your browser and prompt your to login to the heroku account created.

### Create app

**ENSURE** that you are in the root directory of this repo on your local environment.

```
$ heroku create
```

### Create DB

```
heroku addons:create heroku-postgresql:hobby-dev
```

### Seed DB

```
$ cat seed.sql | heroku pg:psql
```


### Configure Code

Here are some gotchas to keep in mind:

1. `npm start` is needed to start the app
2. You want to use `process.env.DATABASE_URL || "postgres://localhost/DB_NAME"` to allow app to connect via heroku as well
3. On that note, heroku will create a single DB, so `DROP DATABASE if exists [db_name]` will not work
4. For the express port, you want to use: `process.env.PORT || 5001` to ensure heroku can bind port

### Deploy

```
$ git push heroku master
$ heroku ps:scale web=1
$ heroku logs --tail
```

The last item is to test and ensure that app is working!

### Travis

```
$ $(heroku auth:token)
```

Take this auth token and store into travis

Then,

```
deploy:
  provider: heroku
  api_key: ...
  on: production
  strategy: git
  run:
    - "npm run db:migrate"
    - "npm run some:other:task"
```

The last two are just features, don't actually include if you don't need to use!
