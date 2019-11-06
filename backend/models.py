from db_client import db


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
