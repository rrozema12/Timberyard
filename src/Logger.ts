import { colors } from './utils/colors';

function dateFormat() {
  return new Date(Date.now()).toUTCString();
}

function generateMessage(body: any) {
  return `${body.backgroundColor}${body.color} ${body.type} ${colors.Reset}`;
}

class Log {
  body: { color: string; backgroundColor: string; type: string; message: string; error?: object };

  constructor() {
    this.body = {
      color: colors.Reset,
      backgroundColor: colors.reset,
      type: 'log',
      message: '',
      error: {},
    };
  }

  setBody(type: string, message: string, error?: object) {
    switch (type) {
      case 'log':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Green,
          type: 'LOG',
          message,
        };
        break;
      case 'info':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Blue,
          type: 'INFO',
          message,
        };
        break;
      case 'warn':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Yellow,
          type: 'WARN',
          message,
        };
        break;
      case 'error':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Red,
          type: 'ERROR',
          message,
          error,
        };
        break;
    }
  }

  log(message = '') {
    this.setBody('log', message);
    console.log(`${dateFormat()} 💬 ${generateMessage(this.body)} ${this.body.message}`);
  }

  info(message = '') {
    this.setBody('info', message);
    console.log(`${dateFormat()} ℹ️ ${generateMessage(this.body)} ${colors.Reset} ${this.body.message}`);
  }

  warn(message = '') {
    this.setBody('warn', message);
    console.log(`${dateFormat()} ⚠️ ${generateMessage(this.body)} ${colors.Reset} ${this.body.message}`);
  }

  error(message = '', error = {}) {
    this.setBody('error', message, error);
    console.log(`${dateFormat()} 🚫 ${generateMessage(this.body)} ${colors.Reset} ${this.body.message}`);
  }
}

export default Log;
