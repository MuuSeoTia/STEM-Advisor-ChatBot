from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://bhcc:bhcc@localhost:5432/mariadb'
app.init_app(app)
db = SQLAlchemy(app)
class BHCC_User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(unique=True)
    email: Mapped[str] = mapped_column(unique=True)
    response: db.Column(db.String(200)) # type: ignore , <-- make this into jsonify response to be GET

#Create the tables https://flask-sqlalchemy.palletsprojects.com/en/3.1.x/quickstart/#initialize-the-extension
with app.app_context():
    db.create_all()



@app.route('/api')
def home():
    return {'Hello': 'World'}

import apiCall
apiCall.APICall("How do I register for classes?")

if __name__ == '__main__':
    app.run(debug=True)


