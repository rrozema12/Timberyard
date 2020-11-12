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

class Timberyard {
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

  private setBody(type: string, message: string, content?: object) {
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

  public log(message = '', content?: any) {
    this.setBody('log', message, content);
    process.stdout.write(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}   |  ${this.body.message}${`${formatContent(content)}`}`,
    );
    return this.body;
  }

  public info(message = '', content?: any) {
    this.setBody('info', message, content);
    process.stdout.write(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}  | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }

  public warn(message = '', content?: any) {
    this.setBody('warn', message, content);
    process.stdout.write(
      `🪓 ${dateFormat()} ${generateMessage(this.body)}  | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }

  public error(message = '', content?: any) {
    this.setBody('error', message, content);
    process.stdout.write(
      `🪓 ${dateFormat()} ${generateMessage(this.body)} | ${colors.Reset} ${this.body.message}${`${formatContent(
        content,
      )}`}`,
    );
    return this.body;
  }
}

export default Timberyard;
