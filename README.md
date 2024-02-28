# STEM-Advisor-ChatBot
AI advisor app made by BHCC STEM Club.

## Tools Used
- Frontend:
  - [React](https://react.dev)
  - [ViteJS](https://vitejs.dev)
  - [shadcn/ui](https://ui.shadcn.com)
  - [TailwindCSS](https://tailwindcss.com)

- Backend:
  - Python 3
  - SQLAlchemy
  - Flask
  - MariaDB/MySQL
  - phpMyAdmin (for database management)

## How to run

**Double check the directory you are in before running commands**

If you are in the root directory, and you run `npm install` you will see a `package-lock.json` file in the root directory. This is not what you want. Please don't commit that lock file. Change into the `cd frontend` first for that. Likewise, before installing python packages, change into the `cd backend`, otherwise, it wont' work when you run `pip install -r requirements.txt`.

If you're using the devcontainer, you can phpMyAdmin (the database management tool) by going to `localhost:8080` in your browser. The login credentials are already set in the `docker-compose.yml` so it should open without asking for a password.

### Development Container (.devcontainer)
_This assumes you have docker installed, and are able to sucessfully run `docker run hello-world`_

This is an easy way to get an environment with node.js and the database,
all running on your own computer.

#### Frontend
1. Open the project in VSCode
2. Install the Remote - Containers extension
3. Open the command palette and run `Remote-Containers: Reopen in Container`
4. Wait for the container to build and start
5. Run `cd frontend` to change into the frontend directory
6. Run `npm install` to install the dependencies
7. Run `npm run dev` to start the server
8. Open your browser to `localhost:5173`

#### Backend
1. Open the project in VSCode
2. Install the Remote - Containers extension
3. Open the command palette and run `Remote-Containers: Reopen in Container`
4. Wait for the container to build and start
5. Run `cd backend` to change into the backend directory
6. Run `pip install -r requirements.txt` to install the dependencies
7. Run your python file with `python3 file.py`

### Local Development

_This assumes you have node.js and npm installed for frontend, and python installed for the backend._

#### Frontend

1. Clone the repository
2. Run `cp .env-example .env` to create a .env file
3. Run `npm install` or `npm i` to install the dependencies
4. Run `npm run dev` to start the server
5. Open your browser to `localhost:5173`

#### Backend

1. Clone the repository
2. Run `cp .env-example .env` to create a .env file
3. Change into the backend directory with `cd backend`
4. Create a virtual environment with `python3 -m venv venv`
5. Activate the virtual environment with `source venv/bin/activate`
3. Run `pip install -r requirements.txt` to install the dependencies
4. Run your python file with `python3 file.py`

If you want to run the database locally, first make sure you have postgres installed. Installation is diffrent for each OS, so you'll have to look up how to do it for your system. You can find the postgresql installation guide at [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

To create the database, run the following commands in the terminal:
```
dropdb stem_advisor
createdb stem_advisor
psql stem_advisor -f db/create_tables.sql
```
