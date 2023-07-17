from flask import request
from flask_restful import Resource
from marshmallow import ValidationError

from notifications_app.notifications import Notifications
from notifications_app.schemas import CategorySchema, IncomingNotificationSchema, LogsNotificationSchema
from notifications_app.utils import Utils


class CategoriesResource(Resource):

    def get(self):
        category_schema = CategorySchema(many=True)
        return category_schema.dump(Utils.get_all_categories())


class NotificationsResource(Resource):

    def post(self):

        try:
            incoming_notification = IncomingNotificationSchema().load(request.get_json())
        except ValidationError as e:
            return e.messages, 400
        except Exception as e:
            print(e)
            return {'message': 'Internal Server Error'}, 500

        users_notified = Notifications(**incoming_notification).send_notifications()

        return {'message': 'Notifications sent!', 'users_notified': users_notified}, 200


class LogsResource(Resource):

    def get(self):
        logs_schema = LogsNotificationSchema(many=True)
        return logs_schema.dump(Utils.get_all_logs())
