from flask_sqlalchemy import SQLAlchemy

#to access database:
#> ./cloud_sql_proxy -instances=potent-retina-254722:us-central1:putitinpark=tcp:3306 -credential_file=credentials.json

#to access mysql client:
#> mysql -u root -p --host 127.0.0.1

#Initialize Database Client
db = SQLAlchemy()
