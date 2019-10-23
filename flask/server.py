import flask
import flask_sqlalchemy
import flask_restless

app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = mysql+pymysql://root:@localhost:3306/models.db #'mysql+mysqldb://root@/models?unix_socket=/cloudsql/potent-retina-254722:putitinpark' #need to test
db = flask_sqlalchemy.SQLAlchemy(app)

class Location(db.Model):
    __table__ = db.Model.metadata.tables['location']

class Nationalparks(db.Model):
    __table__ = db.Model.metadata.tables['nationalparks']

class Recreation(db.Model):
    __table__ = db.Model.metadata.tables['recreation']

manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)
manager.create_api(Location, methods=['GET'])
manager.create_api(Nationalparks, methods=['GET'])
manager.create_api(Recreation, methods=['GET'])

app.run()