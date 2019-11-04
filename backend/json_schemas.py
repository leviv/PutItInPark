from flask_marshmallow import Marshmallow, fields
from models import *

ma = Marshmallow()

class LocationSchema(ma.ModelSchema):
	class Meta:
		model = Location

class NationalparkSchema(ma.ModelSchema):
	class Meta:
		model = Nationalpark

class RecreationSchema(ma.ModelSchema):
	class Meta:
		model = Recreation
