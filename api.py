from datetime import datetime
from time import sleep

from flask import Blueprint, jsonify


api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/time')
def time():
    sleep(0.25)
    return jsonify(now=datetime.now().replace(microsecond=0).isoformat())