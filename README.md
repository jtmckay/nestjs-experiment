<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository, and postgres.

## Installation

```bash
$ npm install
$ docker-compose up -d
$ npm run migrate:latest
```

## Running the app

Pre-requisite: docker-compose

### Database (Service 1 of 2)

```
$ docker-compose up -d
```

### Server (Service 2 of 2)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## DB Migrations

### New Migration

```
$ npm run new:migration
```

### Apply Migrations

```
$ npm run migrate:latest
```
