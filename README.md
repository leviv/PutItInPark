# Put It In Park

Provides information about national parks and recreational areas in the United States.
The project website is https://putitinpark.herokuapp.com

## GitLab Pipelines

The GitLab pipelies of the project can be found [here](https://gitlab.com/leviv1/putitinpark/pipelines).
View our technical report in the file `Technical_Report.pdf` and our final presentation in the file `Presentation_PutItInPark.pdf` (both in this directory).

## Development

### Backend [Deprecated]

This project no longer has a real backend. Instead we mock up the data with some JSON files and a frontend call to `fakeFetch` in `client/src/fake_api/fakeApi.js`. However we still keep around the `backend/` folder for historical purposes

To get started with backend development, first install the python dependencies used to run flask.

```bash
git clone git@github.com:leviv/PutItInPark.git
cd PutItInPark
pip install -r requirements.txt
```

Then run the backend

```bash
flask run
```

### Database

To get the backend working locally, you must set up a database. I currently use a [free heroku Postgres database](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres) that was easy to set up, although it is possible to use local or other options.

No matter the option, ensure you copy the database URL into the appropriate environment variable. For me this looked like:

```
heroku config:get DATABASE_URL -a <PROJECT_NAME> | pbcopy
export DATABASE_URL='<COPIED_URL>'
```

Run the scripts in `database/` for each of the three models to populate the database. For me, using the [heroku cli](https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli) this looked like:

```bash
cd DB\ Scripts/
brew install postgresql
heroku pg:psql location.sql park.sql rec.sql

Connecting to HEROKU_POSTGRESQL_RED... done
psql (12.5, server 12.5)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.

=>

```

If the scripts fail to run, you may have to manually run the `CREATE TABLE` command with each of the 3 table schemas before populating with data.

### Frontend

The information for running the frontend locally exists at `client/README.md`.
