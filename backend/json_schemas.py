from flask_marshmallow import Marshmallow, fields
from models import *

ma = Marshmallow()

class LocationsSchema(ma.ModelSchema):
	class Meta:
		model = Location
