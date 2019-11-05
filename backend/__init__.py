# Required imports
import os
from flask import Flask
from db_client import db
from json_schemas import ma
# import config
import pymysql
from flask_cors import CORS

pymysql.install_as_MySQLdb()

# Initialize Flask app
app = Flask(__name__)
CORS(app)
prod_uri = 'mysql+pymysql://root:SWE10PutItInPark@/models?unix_socket=/cloudsql/potent-retina-254722:us-central1:putitinpark'
dev_uri = 'mysql+pymysql://root:SWE10PutItInPark@127.0.0.1/models'
app.config["SQLALCHEMY_DATABASE_URI"] = dev_uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

db.init_app(app)
ma.init_app(app)

from routes import routes
app.register_blueprint(routes)

port = int(os.environ.get("PORT", 8080))
if __name__ == "__main__":
    app.run(threaded=True, host="0.0.0.0", port=port)
