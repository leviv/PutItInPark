# Required imports
import os
from flask import Flask
import flask_restless
import pymysql
from flask_cors import CORS
from db_client import db
from models import *

pymysql.install_as_MySQLdb()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

prod_uri = 'mysql+pymysql://root:SWE10PutItInPark@/models?unix_socket=/cloudsql/potent-retina-254722:us-central1:putitinpark'
dev_uri = 'mysql+pymysql://root:SWE10PutItInPark@127.0.0.1/models'
app.config["SQLALCHEMY_DATABASE_URI"] = prod_uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

db.init_app(app)

# Create API endpoints
manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(Location, collection_name="locations", methods=["GET"])
manager.create_api(Nationalparks, collection_name="nationalparks", methods=["GET"])
manager.create_api(Recreation, collection_name="recreations", methods=["GET"])

port = int(os.environ.get("PORT", 8080))
if __name__ == "__main__":
    app.run(threaded=True, host="0.0.0.0", port=port)
