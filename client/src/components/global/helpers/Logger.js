import Logging from 'js-logging';

let conf = {
  filters: {
    debug: 'white',
    info: 'cyan',
    notice: 'green',
    warning: 'orange',
    error: 'red',
    critical: 'red',
    alert: 'cyan',
    emergency: 'magenta'
  }
};

const logger = Logging.colorConsole(conf);
export default logger;
