import winston, { Logger, LoggerOptions } from 'winston';

const loggerConfig: LoggerOptions = {
  level: 'debug',
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports:
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      ),
    }),
};

export const logger: Logger = winston.createLogger(loggerConfig);

export const log = {
  client: {
    connectionError: '💀 💀 💀 Error connecting to the client.  Error: ',
  }
}
