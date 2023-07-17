from notifications_app import db
from notifications_app.models import Category


def seed_categories():
    # Create some categories
    cat1 = Category(name='Sports')
    cat2 = Category(name='Finance')
    cat3 = Category(name='Movies')

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)

    # Commit the session
    db.session.commit()
