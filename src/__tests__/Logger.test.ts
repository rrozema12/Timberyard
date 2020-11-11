import Logger from '../Logger';

test('My Logger', () => {
  const logger = new Logger();
  logger.setBodyColor('red');
  expect(logger.body.color).toBe('red');
});
