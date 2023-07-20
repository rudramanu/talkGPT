
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.users import User
from dotenv import load_dotenv
from flask_cors import CORS

from flask_pymongo import PyMongo

users_bp = Blueprint('users', __name__)
# users_bp.config['MONGO_URI'] = load_dotenv
mongo = PyMongo(users_bp)
CORS(users_bp)



@users_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "All details are required"}), 400

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"message": "User already registered"}), 400

    password_hash = generate_password_hash(password, method='bcrypt', salt_length=3)
    new_user = User(name=name, email=email, password=password_hash)
    new_user.save()

    return jsonify({"message": "User Registered"}), 200
if __name__ == '__main__':
    users_bp.run() 