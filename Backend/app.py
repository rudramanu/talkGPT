
from flask import Flask, jsonify

from routes.users import users_bp

app = Flask(__name__)
app.register_blueprint(users_bp, url_prefix="/users")

@app.route("/")
def home():
    return "APIs are working fine"

if __name__ == "__main__":
    app.run(port=9100)