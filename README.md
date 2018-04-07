# ttn-node-mongo
Simple Express and MongoDB server for HTTP integration with TTN

## Quick Start Dev Server

If you have everything already installed:
```
npm install
npm run start
```


## Dependencies

- NodeJS
- Mongodb


## Node and NPM

https://nodejs.org/


## MongoDB

https://docs.mongodb.com/manual/administration/install-community/


## Ubuntu 16.04 (my dev env)

https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04

### After Install

So you don't have to check the article everytime you need to start the Mongo DB server:
```
sudo systemctl start mongod
sudo systemctl status mongod
```


## Build and Deploy

To run the server on a more permanent server:

```
npm run build
npm run serve
```
