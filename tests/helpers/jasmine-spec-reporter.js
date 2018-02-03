// eslint-disable-next-line import/no-extraneous-dependencies
const { SpecReporter } = require('jasmine-spec-reporter');

jasmine.getEnv().clearReporters();

jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    },
    summary: {
        displayDuration: true
    }
}));
