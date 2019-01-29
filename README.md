# Workstation ID server

Basic test service to produce incrementing workstation IDs useful during tests at scale.

```
$ git clone git@github.com:sasjo/workstationid-server.git
$ cd workstationid-server
$ npm install
$ npm start
```

The service will return incremented integers for every request.
```
$ curl http://localhost:3000/
```
Returns `1`, `2`, `3`... The sequence starts from zero on every reboot.
