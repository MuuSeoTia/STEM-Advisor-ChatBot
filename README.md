# STEM-Advisor-ChatBot
AI advisor app made by BHCC STEM Club.

## Tools Used
- Frontend: React w/ ViteJS
- Backend: Python + SQLAlchemy

## How to run

### Development Container (.devcontainer)
_This assumes you have docker installed, and are able to sucessfully run `docker run hello-world`_

This is an easy way to get an environment with node.js and the database,
all running on your own computer.

1. Open the project in VSCode
2. Install the Remote - Containers extension
3. Open the command palette and run `Remote-Containers: Reopen in Container`
4. Wait for the container to build and start
5. Run `npm install` to install the dependencies
6. Run `npm run dev` to start the server
7. Open your browser to `localhost:5173`

### Local Development
_This assumes you have node.js and npm installed_

1. Clone the repository
2. Run `cp .env-example .env` to create a .env file
3. Run `npm install` or `npm i` to install the dependencies
4. Run `npm run dev` to start the server
5. Open your browser to `localhost:5173`

If you want to run the database locally, first make sure you have postgres installed. Installation is diffrent for each OS, so you'll have to look up how to do it for your system. You can find the postgresql installation guide at [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

To create the database, run the following commands in the terminal:
```
dropdb stem_advisor
createdb stem_advisor
psql stem_advisor -f db/create_tables.sql
```