# STEM-Advisor-ChatBot
AI advisor app made by BHCC STEM Club. Uses node v20 and postgres
run pg server on port 5432

copy contents of /stem-advisor-chatbot/.env-example to a file named .env in the same directory

to create db
```
dropdb stem_advisor
createdb stem_advisor
psql stem_advisor -f db/create_tables.sql
```

to launch server
```
 cd stem-advisor-chatbot
 npm i
 npm run dev
```
 open browser to `localhost:5173`