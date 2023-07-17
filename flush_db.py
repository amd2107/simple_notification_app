from notifications_app import db
from notifications_app import create_app


def drop_and_create_database():

    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()


if __name__ == "__main__":
    drop_and_create_database()
