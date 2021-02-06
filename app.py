# Required imports
import os
from flask import Flask,send_from_directory,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import flask_restless
from flask_cors import CORS

# Configuration class to establish connection to the database
class Config(object):
	SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
	SQLALCHEMY_TRACK_MODIFICATIONS = False

# Initialize Flask app
app = Flask(__name__,static_folder='client/build',static_url_path='')
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

# Database models

class Location(db.Model):
    fips = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)
    num_parks = db.Column(db.Integer)
    park_names = db.Column(db.String(240))
    numrec = db.Column(db.Integer)
    rec_ids = db.Column(db.String(240))
    pop = db.Column(db.Integer)
    mail_code = db.Column(db.String(2))
    imglink = db.Column(db.String(240))

    def __repr__(self):
        return "<Location %r>" % self.name


class Nationalparks(db.Model):
    park_code = db.Column(db.String(24), primary_key=True, unique=True)
    park_name = db.Column(db.String(24))
    location = db.Column(db.String(24))
    num_rec = db.Column(db.Integer)
    rec_ids = db.Column(db.String(240))
    description = db.Column(db.String(480))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    fee = db.Column(db.Float)
    visitors = db.Column(db.Integer)
    imglink = db.Column(db.String(240))
    park_id = db.Column(db.String(240))
    weather = db.Column(db.String(240))

    def __repr__(self):
        return "<Nationalparks %r>" % self.park_name


class Recreation(db.Model):
    rec_id = db.Column(db.Integer, primary_key=True, unique=True)
    rec_name = db.Column(db.String(240))
    location = db.Column(db.String(240))
    natpark = db.Column(db.String(24))
    reservable = db.Column(db.String(5))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    activities = db.Column(db.String(480))
    imglink = db.Column(db.String(240))
    num_activities = db.Column(db.Integer)
    description = db.Column(db.String(480))
    par_org_id = db.Column(db.Integer)
    stay_limit = db.Column(db.String(5))

    def __repr__(self):
        return "<Recreation %r>" % self.rec_name

# Create API endpoints
manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api')
def hello():
    return "Welcome to the PutItInPark API! Please explore /api/nationalparks, /api/locations and /api/recreations !!"

app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

manager.create_api(
    Nationalparks,
    primary_key="park_name",
    collection_name="nationalparks",
    methods=["GET"],
    results_per_page=0,
)
manager.create_api(
    Location,
    primary_key="name",
    collection_name="locations",
    methods=["GET"],
    results_per_page=0,
)
manager.create_api(
    Recreation,
    primary_key="rec_name",
    collection_name="recreations",
    methods=["GET"],
    results_per_page=0,
)

port = int(os.environ.get("PORT", 8080))
if __name__ == "__main__":
    app.run(threaded=True, host="127.0.0.1", port=port)
