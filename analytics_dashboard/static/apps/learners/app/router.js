define(function (require) {
    'use strict';

    var Marionette = require('marionette'),

        LearnersRouter;

    LearnersRouter = Marionette.AppRouter.extend({
        appRoutes: {
            // TODO: handle 'queryString' arguments in https://openedx.atlassian.net/browse/AN-6668
            '(/)(?*queryString)': 'showLearnerRosterPage',
            ':username(/)(?*queryString)': 'showLearnerDetailPage',
            '*notFound': 'showNotFoundPage'
        },

        onRoute: function (name) {
            if (name.startsWith('show')) {
                this.options.controller.triggerMethod('showPage');
            }
        }
    });

    return LearnersRouter;
});
