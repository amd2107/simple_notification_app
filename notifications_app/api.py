from notifications_app.resources import NotificationsResource, CategoriesResource, LogsResource


def initialize_api(api):
    api.add_resource(CategoriesResource, '/api/categories')
    api.add_resource(NotificationsResource, '/api/notifications')
    api.add_resource(LogsResource, '/api/logs')
