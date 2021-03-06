const env = require('env-var');

const settings = {
  NODE_ENV: env.get('NODE_ENV').required().asString(),
  covidCSV: env.get('CSVCovidMG').required().asString(),
  BUCKET_NAME: env.get('BUCKET_NAME').required().asString(),
  DAILY_TABLE: env.get('DAILY_TABLE').required().asString(),
  SQS_QUEUE: env.get('SQS_QUEUE').required().asString(),
}
module.exports = settings;
