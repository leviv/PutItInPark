import flask
import flask_sqlalchemy
import flask_restless

app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mmysql+pymysql://root:SWE10PutItInPark@/models?unix_socket=/cloudsql/potent-retina-254722:us-central1:putitinpark'
db = flask_sqlalchemy.SQLAlchemy(app)

class Location(db):
    __table__ = db.tables['location']

class Nationalparks(db.Model):
    __table__ = db.Model.metadata.tables['nationalparks']

class Recreation(db.Model):
    __table__ = db.Model.metadata.tables['recreation']

manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)
manager.create_api(Location, methods=['GET'])
manager.create_api(Nationalparks, methods=['GET'])
manager.create_api(Recreation, methods=['GET'])

app.run()
