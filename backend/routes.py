from flask import request, jsonify, Blueprint, redirect, url_for
from models import *
from json_schemas import *

routes = Blueprint('routes', __name__, template_folder='templates')

@routes.route("/", methods=["GET"])
def hello():
    return "Welcome to the putitinpark API! Commands found here: "

@routes.route("/locations", methods=["GET"])
def locations():
    try:
        locations = Location.query.paginate(page=1, per_page=15, error_out=False).items
        location_schema = LocationSchema(many=True)
        return jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/nationalparks", methods=["GET"])
def nationalparks():
    try:
        nationalparks = Nationalpark.query.paginate(page=1, per_page=15, error_out=False).items
        nationalpark_schema = NationalparkSchema(many=True)
        return jsonify(nationalpark_schema.dump(nationalparks)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/recreations", methods=["GET"])
def recreations():
    try:
        recreations = Recreation.query.paginate(page=1, per_page=15, error_out=False).items
        recreation_schema = RecreationSchema(many=True)
        return jsonify(recreation_schema.dump(recreations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500