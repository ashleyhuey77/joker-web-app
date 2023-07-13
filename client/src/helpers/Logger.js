import chalk from 'chalk';

class Logger {
    static log(level, message) {
        const output = `${
            new Date().toISOString().replace('T', ' ').split('.')[0]
        } ${level} ${message}`;
        console.log(output);
    }

    static info(message) {
        this.log(chalk.cyanBright('info', message));
    }
    static debug(message) {
        this.log(chalk.blackBright('debug', message));
    }
    static trace(message) {
        this.log(chalk.magentaBright('trace', message));
    }
    static warn(message) {
        this.log(chalk.yellow('warn', message));
    }
    static error(message) {
        this.log(chalk.redBright('error', message));
    }
}

const logger = Logger;
export default logger;
