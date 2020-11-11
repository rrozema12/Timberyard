import { colors } from './utils/colors';
import { IBody } from './types/body';

export function dateFormat() {
  return new Date(Date.now()).toUTCString();
}

export function generateMessage(body: IBody) {
  return `${body.backgroundColor}${body.color} ${body.type} ${colors.Reset}`;
}

export function formatContent(content: any) {
  if (content === undefined) return '';

  if (content instanceof Array) {
    return `\n${JSON.stringify(content, undefined, 2)}\n`;
  }

  if (content instanceof Object) {
    return `\n${JSON.stringify(content, undefined, 2)}\n`;
  }

  return `, ${content}`;
}

class Lumberjack {
  body: {
    color: string;
    backgroundColor: string;
    type: string;
    message: string;
    content?: any;
  };

  constructor() {
    this.body = {
      color: colors.Reset,
      backgroundColor: colors.reset,
      type: 'log',
      message: '',
      content: null,
    };
  }

  setBody(type: string, message: string, content?: object) {
    switch (type) {
      case 'log':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Green,
          type: 'LOG',
          message,
          content,
        };
        break;
      case 'info':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Blue,
          type: 'INFO',
          message,
          content,
        };
        break;
      case 'warn':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Yellow,
          type: 'WARN',
          message,
          content,
        };
        break;
      case 'error':
        this.body = {
          color: colors.fg.White,
          backgroundColor: colors.bg.Red,
          type: 'ERROR',
          message,
          content,
        };
        break;
    }
  }

  log(message = '', content?: any) {
    this.setBody('log', message, content);
    console.log(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}   |  ${this.body.message}${`${formatContent(content)}`}`,
    );
    return this.body;
  }

  info(message = '', content?: any) {
    this.setBody('info', message, content);
    console.info(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}  | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }

  warn(message = '', content?: any) {
    this.setBody('warn', message, content);
    console.warn(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}  | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }

  error(message = '', content?: any) {
    this.setBody('error', message, content);
    console.error(
      `🪓 ${dateFormat()} ${generateMessage(this.body)} | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }
}

export default Lumberjack;
