import { dateFormat, generateMessage, formatContent } from '../Timberyard';
import { colors } from '../utils/colors';
test('date formatter', () => {
  expect(dateFormat()).toBe(new Date(Date.now()).toUTCString());
});

test('generate a message', () => {
  expect(
    generateMessage({
      color: colors.fg.White,
      backgroundColor: colors.bg.Red,
      type: 'ERROR',
      message: 'Message',
      content: 'Content',
    }),
  ).toBe(`${colors.bg.Red}${colors.fg.White} ERROR ${colors.Reset}`);

  expect(
    generateMessage({
      color: colors.fg.White,
      backgroundColor: colors.bg.Blue,
      type: 'INFO',
      message: 'Message',
      content: 'Content',
    }),
  ).toBe(`${colors.bg.Blue}${colors.fg.White} INFO ${colors.Reset}`);

  expect(
    generateMessage({
      color: colors.fg.White,
      backgroundColor: colors.bg.Yellow,
      type: 'WARN',
      message: 'Message',
      content: 'Content',
    }),
  ).toBe(`${colors.bg.Yellow}${colors.fg.White} WARN ${colors.Reset}`);

  expect(
    generateMessage({
      color: colors.fg.White,
      backgroundColor: colors.bg.Green,
      type: 'LOG',
      message: 'Message',
      content: 'Content',
    }),
  ).toBe(`${colors.bg.Green}${colors.fg.White} LOG ${colors.Reset}`);
});

test('format content', () => {
  expect(formatContent(undefined)).toBe('');
  expect(formatContent(null)).toBe(', null');
  expect(formatContent(['arg1', 'arg2'])).toBe(`\n${JSON.stringify(['arg1', 'arg2'], undefined, 2)}\n`);
  expect(formatContent({ test: { test: 'test' } })).toBe(
    `\n${JSON.stringify({ test: { test: 'test' } }, undefined, 2)}\n`,
  );
  expect(formatContent(false)).toBe(', false');
  expect(formatContent(true)).toBe(', true');
  expect(formatContent("string")).toBe(', string');
});
