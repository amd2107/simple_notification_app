from notifications_app import db
from notifications_app.models import Category, Log


class Utils:

    @staticmethod
    def get_all_categories():
        return Category.query.all()

    @staticmethod
    def get_all_logs():
        return Log.query.order_by(Log.timestamp.desc()).limit(25).all()

    @staticmethod
    def generate_notification_log(message, **log_user_data):
        log = Log(
            message=message,
            **log_user_data
        )

        db.session.add(log)
        db.session.commit()
