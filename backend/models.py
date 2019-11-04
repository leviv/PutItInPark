from db_client import db

class Location(db.Model):
    fips = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(24), unique=True, nullable=False)
    num_parks = db.Column(db.Integer)
    park_names = db.Column(db.String(240))
    num_rec = db.Column(db.Integer)
    rec_ids = db.Column(db.String(240))
    pop = db.Column(db.Integer)
    mail_code = db.Column(db.String(2))
    imglink = db.Column(db.String(240))

    def __repr__(self):
        return "<Location %r>" % self.name

class Nationalpark(db.Model):
    park_code = db.Column(db.String(24), primary_key=True, unique=True)
    park_name = db.Column(db.String(24))
    location = db.Column(db.String(24))
    num_rec = db.Column(db.Integer)
    rec_ids = db.Column(db.String(240))
    description = db.Column(db.String(480))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    fees = db.Column(db.Float)
    visitors = db.Column(db.Integer)
    imglink = db.Column(db.String(240))
    park_id = db.Column(db.String(240))
    weather = db.Column(db.String(240))

    def __repr__(self):
        return "<Nationalpark %r>" % self.park_name

class Recreation(db.Model):
    rec_id = db.Column(db.Integer, primary_key=True, unique=True)
    rec_name = db.Column(db.String(240))
    location = db.Column(db.String(240))
    natpark = db.Column(db.String(24))
    reservable = db.Column(db.Boolean)
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)
    activities = db.Column(db.String(480))
    imglink = db.Column(db.String(240))
    num_activities = db.Column(db.Integer)
    description = db.Column(db.String(480))
    par_org_id = db.Column(db.Integer)
    stay_limit = db.Column(db.Boolean)

    def __repr__(self):
        return "<Recreation %r>" % self.rec_name

#
# import flask
# import flask_sqlalchemy
# import flask_restless
#
# app = flask.Flask(__name__)
# app.config["DEBUG"] = True
# app.config["SQLALCHEMY_DATABASE_URI"] = (
#     "mysql+pymysql://root:SWE10PutItInPark@127.0.0.1/models"
#     # "mysql+pymysql://root:SWE10PutItInPark@/models?unix_socket=/cloudsql/potent-retina-254722:us-central1:putitinpark"
# )  #'mysql+pymysql://root:SWE10PutItInPark@127.0.0.1/models'
# db = flask_sqlalchemy.SQLAlchemy(app)
# db.Model.metadata.reflect(db.engine)
#
#
# class Location(db.Model):
#     __tablename__ = "location"
#     __table_args__ = {"extend_existing": True}
#     fips = db.Column(db.Integer, primary_key=True)
#
#
# class Nationalparks(db.Model):
#     __tablename__ = "recreation"
#     __table_args__ = {"extend_existing": True}
#     rec_id = db.Column(db.Integer, primary_key=True)
#
#
# class Recreation(db.Model):
#     __tablename__ = "nationalparks"
#     __table_args__ = {"extend_existing": True}
#     park_code = db.Column(db.Unicode, primary_key=True)
#
#
# db.create_all()
#
# manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)
# manager.create_api(Location, methods=["GET"])
# manager.create_api(Nationalparks, methods=["GET"])
# manager.create_api(Recreation, methods=["GET"])
#
# app.run()
