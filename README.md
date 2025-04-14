# Die Kommunale

## Setup

Make sure to install the dependencies:
```
just
docker
docker-compose
```

```bash
# docker-compose needs to be running on your machine
just install
```

Create .env of the Project
```
NAME=solid-ui
PORT_WEB_APP=6006
```

## Development

The environment starts storybook under localhost:6006.

```bash
# npm
just start
```