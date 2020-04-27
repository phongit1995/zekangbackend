require("dotenv").config();
import winston from 'winston';
import expressWinston  from 'express-winston' ;
export const  logger = expressWinston.logger({
    transports: [
        new winston.transports.File({ filename: 'app.log', level: 'error' }),
        new winston.transports.File({ filename: 'app.log' })
    ],
    // format: winston.format.combine(
    //     winston.format.colorize(),
    //     winston.format.json()
    // ),
    //   msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    //   colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
})
export const loggerError= expressWinston.errorLogger({
    transports: [
        new winston.transports.File({ filename: 'app.log', level: 'error' }),
        new winston.transports.File({ filename: 'app.log' })
    ]
  })