from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')
@app.route('/api/members', methods=['GET'])
def members():
    return jsonify(
        {
            "members" : [
                "Member1", 
                "Member2", 
                "Member3"
            ]
        }
    )


if __name__ == '__main__' :
    app.run(debug=True, port=8000)