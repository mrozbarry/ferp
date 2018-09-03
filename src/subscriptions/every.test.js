const test = require('ava');
const Every = require('./every.js');

test.cb('Every.millisecond dispatches messages', (t) => {
  t.plan(2);
  const start = Date.now();
  const detach = Every.millisecond(10, 'test')((message) => {
    detach();
    const delay = Date.now() - start;
    t.deepEqual(message, { type: 'test' });
    t.truthy(delay >= 10 && delay <= 15);
    t.end();
  });
});

test('Every exports millisecond, second, minute, and hour', (t) => {
  t.is(typeof Every.millisecond, 'function');
  t.is(typeof Every.second, 'function');
  t.is(typeof Every.minute, 'function');
  t.is(typeof Every.hour, 'function');
});
