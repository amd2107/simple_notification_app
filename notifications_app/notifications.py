import json

from notifications_app.constants import PUSH_NOTIFICATION, EMAIL_NOTIFICATION, SMS_NOTIFICATION
from notifications_app.models import Category
from notifications_app.utils import Utils


class Notifications:
    def __init__(self, category_id, message):
        self.category = self.__load_category(category_id)
        self.message = message
        super(Notifications, self).__init__()

    @staticmethod
    def __load_category(category_id):
        try:
            # Load category from the database
            return Category.query.get(category_id)
        except Exception as e:
            print(e)
            raise Exception('Category not found')

    @staticmethod
    def __load_users():
        data = []
        try:
            with open('mockups/users.json') as f:
                data = json.load(f)
        except Exception as e:
            print(e)

        return data

    def filter_users_by_category(self):
        data = self.__load_users()
        filtered_data = list(filter(lambda x: self.category.name in x.pop('Subscribed'), data))
        return filtered_data

    def send_notification(self, user):
        Utils.generate_notification_log(self.message, **user)
        # Send notification to the users

    def send_notifications(self):
        # Retrieve users filtered by the received category
        users = self.filter_users_by_category()
        for user in users:
            channels = user.pop('Channels')

            user = {key.lower().replace(" ", "_"): value for key, value in user.items()}
            user['user_id'] = user.pop('id')
            user['category'] = [self.category, ]

            if EMAIL_NOTIFICATION in channels:
                user['channel'] = EMAIL_NOTIFICATION
                self.send_notification(user)
            if SMS_NOTIFICATION in channels:
                user['channel'] = SMS_NOTIFICATION
                self.send_notification(user)
            if PUSH_NOTIFICATION in channels:
                user['channel'] = PUSH_NOTIFICATION
                self.send_notification(user)

        return users
