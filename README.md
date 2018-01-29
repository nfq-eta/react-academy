### React workshop (with docker)

#### Setup:
######Run docker container:
* `$ docker-compose build`
* `$ docker-compose up`

When it says `Project started`, minimise terminal and
open a new one. In it ssh into the container with `$ make ssh`.
> All of your commands and work with command line should
be executed whilst inside this docker container

######Development
* `$ npm start` - Compile and run watcher

######Production
* `$ npm run build` - Build production files
