import { colors } from './utils/colors';

const dateFormat = () => {
  return new Date(Date.now()).toUTCString();
};

class Logger {
  body: { color: string };

  constructor() {
    this.body = {
      color: colors.fg.Green,
    };
  }

  setBodyColor(color: string) {
    if (color !== undefined) this.body.color = colors.fg[color];
  }

  log(body = '') {
    console.log(`${dateFormat()} |${this.body.color} LOG ${colors.Reset}| ${body}`);
  }
}

export default Logger;
