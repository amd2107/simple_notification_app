from notifications_app import create_app
from .category_seeds import seed_categories


def seed_db():

    app = create_app()
    with app.app_context():
        seed_categories()


if __name__ == "__main__":
    seed_db()
