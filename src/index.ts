import Lumberjack from './Lumberjack';

const logger = new Lumberjack();

const var1 = { test: { test: 'test' } };
const var2 = ['test', 'wow'];
const var3 = false;
logger.log('This is an object', var1);
logger.info('This is an array', var2);
logger.warn('This is a boolean', var3);
logger.error('This has no content');
