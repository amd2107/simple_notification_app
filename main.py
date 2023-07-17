from flask_restful import Api
from notifications_app import create_app

app = create_app()
api = Api(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
