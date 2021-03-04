
var Sentry = require("@sentry/node")
var tracing = require("@sentry/tracing")

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0
})

exports.handler = function(event, context) {
    var body = JSON.parse(event.body)
    var transaction = Sentry.startTransaction({
        op: "tæææææst",
        name: "test"
    });
    Sentry.captureMessage(JSON.parse(event.body.error))
    transaction.finish()

    return {
        statusCode: 201,
        body: ""
    }
};