from flask import request, jsonify, Blueprint, redirect, url_for
from models import *
from json_schemas import *
from sqlalchemy import desc, asc

routes = Blueprint('routes', __name__, template_folder='templates')

def all_query_wrapper(f):
    def wrapper(*args, **kwargs):
        try:
            query, schema = f(*args, **kwargs)
            return jsonify(schema.dump(query)), 200
        except Exception as e:
            return f'An Error Occured: {e}', 500
    wrapper.__name__ = f.__name__
    return wrapper


@routes.route("/", methods=["GET"])
def hello():
    return "Welcome to the putitinpark API! Commands found here: "

@routes.route("/locations", methods=["GET"])
def locations():
    try:
        if request.data:
            data = request.get_json()
            col = data['col']
            direction = data['direction']
            order = ()
            if (direction == 'asc'):
                order = asc
            else:
                order = desc
            locations = Location.query.order_by(order(col)).paginate(page=1, per_page=15, error_out=False).items
        else:
            locations = Location.query.paginate(page=1, per_page=51, error_out=False).items
        location_schema = LocationSchema(many=True)
        return jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/locations/page=<int:page_number>", methods=["GET"])
@all_query_wrapper
def locations_paginated(page_number):
    try:
        locations = Location.query.paginate(page=page_number, per_page=15, error_out=False).items
        location_schema = LocationSchema(many=True)
        return locations, location_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/locations/<string:location_name>", methods=["GET"])
@all_query_wrapper
def location(location_name):
    try:
        location = Location.query.filter_by(name=location_name).first()
        location_schema = LocationSchema()
        return location, location_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/nationalparks", methods=["GET"])
def nationalparks():
    try:
        if request.data:
            data = request.get_json()
            col = data['col']
            direction = data['direction']
            order = ()
            if (direction == 'asc'):
                order = asc
            else:
                order = desc
            nationalparks = Nationalparks.query.order_by(order(col)).paginate(page=1, per_page=15, error_out=False).items
        else:
            nationalparks = Nationalparks.query.paginate(page=1, per_page=49, error_out=False).items
        nationalpark_schema = NationalparksSchema(many=True)
        return jsonify(nationalpark_schema.dump(nationalparks)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/nationalparks/page=<int:page_number>", methods=["GET"])
@all_query_wrapper
def nationalparks_paginated(page_number):
    try:
        nationalparks = Nationalparks.query.paginate(page=page_number, per_page=12, error_out=False).items
        nationalparks_schema = NationalparksSchema(many=True)
        return nationalparks, nationalparks_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/nationalparks/<string:park_name>", methods=["GET"])
@all_query_wrapper
def nationalpark(park_name):
    try:
        nationalpark = Nationalparks.query.filter_by(park_name=park_name).first()
        nationalparks_schema = NationalparksSchema()
        return nationalpark, nationalparks_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500


@routes.route("/recreations", methods=["GET"])
def recreations():
    try:
        if request.data:
            data = request.get_json()
            col = data['col']
            direction = data['direction']
            order = ()
            if (direction == 'asc'):
                order = asc
            else:
                order = desc
            recreations = Recreation.query.order_by(order(col)).paginate(page=1, per_page=15, error_out=False).items
        else:
            recreations = Recreation.query.paginate(page=1, per_page=210, error_out=False).items
        recreation_schema = RecreationSchema(many=True)
        return jsonify(recreation_schema.dump(recreations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/recreations/page=<int:page_number>", methods=["GET"])
@all_query_wrapper
def recreations_paginated(page_number):
    try:
        recreations = Recreation.query.paginate(page=page_number, per_page=15, error_out=False).items
        recreation_schema = RecreationSchema(many=True)
        return recreations, recreation_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/recreations/<string:rec_name>", methods=["GET"])
@all_query_wrapper
def recreation(rec_name):
    try:
        recreation = Recreation.query.filter_by(rec_name=rec_name).first()
        recreation_schema = RecreationSchema()
        return recreation, recreation_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500

@routes.route("/recreations/id=<int:rec_id>", methods=["GET"])
@all_query_wrapper
def recreation_id(rec_id):
    try:
        recreation = Recreation.query.filter_by(rec_id=rec_id).first()
        recreation_schema = RecreationSchema()
        return recreation, recreation_schema#jsonify(location_schema.dump(locations)), 200
    except Exception as e:
        return "An Error Occured:" + str(e), 500
