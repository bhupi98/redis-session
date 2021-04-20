const winston=require('winston');
const moment=require('moment'); 
const logger=winston.createLogger({
   transports:[
       new winston.transports.File({
           filename:'redis.log',
           level:'info',
           format:winston.format.json(),
           timestamp:winston.format.timestamp()
       })
   ]
})

let timestamp=moment().format('DD-MM-YYYY HH:mm:ss')
logger.log('info',timestamp)

module.exports=logger;