# Project structure
The backend is in the root of notificator folder and the frontend is in the wwww folder.


## Prepare backend


We already have an RDS database for testing purposes

There are 2 commands that were made to interact easier with the DB

1. `python flush_db.py` flush the database and recreate the tables.
2. `python -m seeds` populate the database with some pre-existing data.

## Run backend

Requirements:
- Python 3.9.13

1. Create a virtualenv  using python 3.9 and install the dependencies that are under the requirements folder in the local.txt file.
    - pip install -r requirements/local.txt
2. Set the following environment variables
    - export FLASK_APP=/Users/amontero/Projects/notifications_app/main.py (Update the path to the main.py file in your local machine)
    - export FLASK_ENV=development
3. Execute the seeds module to populate the database with the initial data
    - python -m seeds
4. Run the server
   - python -m flask run
   
The server will be running on http://localhost:5000


## Run frontend

Requirements:
- Node v18.12.1
- NPM 9.6.7

1. Install the dependencies
    - npm install
2. Run the server
    - npm start

The app will be running on http://localhost:3000

By default we are pointing to the backend that is running on http://localhost:5000

