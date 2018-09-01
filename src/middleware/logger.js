const { Result } = require('../types/result.js');

const replacer = (key, value) => {
  if (value && typeof value.serialize === 'function') {
    return value.serialize();
  }
  try {
    return value;
  } catch(err) {
    return `<${value.constructor.name}>`;
  }
};

const logger = (spacing) => (next) => (message, state) => {
  const result = next(message, state);
  console.log('[LOG]', JSON.stringify(result, replacer, spacing));
  return result;
};

module.exports = {
  logger,
};
