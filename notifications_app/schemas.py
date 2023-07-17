from marshmallow import validate, ValidationError

from notifications_app import ma
from notifications_app.models import Category, Log


def validate_positive(n):
    if n <= 0:
        raise ValidationError("Value must be positive.")


class CategorySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Category
        load_instance = True
        fields = ('id', 'name')


class LogsNotificationSchema(ma.SQLAlchemyAutoSchema):
    category = ma.Nested(CategorySchema, many=True)

    class Meta:
        model = Log
        load_instance = True
        fields = ('user_id', 'name', 'email', 'phone_number',
                  'category', 'message', 'channel', 'timestamp')


class IncomingNotificationSchema(ma.Schema):
    category_id = ma.Integer(required=True, validate=validate_positive)
    message = ma.String(required=True, validate=validate.Length(min=1))
