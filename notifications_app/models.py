from notifications_app import db
from sqlalchemy import Enum


log_categories = db.Table(
    'log_categories',
    db.Column('log_id', db.Integer, db.ForeignKey('log.id'), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey('category.id'), primary_key=True)
)


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    logs = db.relationship('Log', secondary=log_categories, back_populates='category')


class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    category = db.relationship('Category', secondary=log_categories, back_populates='logs')
    message = db.Column(db.String(500), nullable=False)
    channel = db.Column(Enum('SMS', 'E-Mail', 'Push Notification', name="channels"), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<Log {self.name}>'
