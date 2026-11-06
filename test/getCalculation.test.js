import test from 'node:test';
import assert from 'node:assert/strict';

import { getCalculation } from '../src/helpers/getCalculation.js';

const enteredValues = {
  distance: 10,
  pace: 300,
  time: 3000,
};

test('calculates time for both distance and pace entry orders', () => {
  assert.equal(
    getCalculation({
      lastChanged: 'pace',
      distance: enteredValues.distance,
      pace: enteredValues.pace,
      time: 0,
    }),
    'time'
  );
  assert.equal(
    getCalculation({
      lastChanged: 'distance',
      distance: enteredValues.distance,
      pace: enteredValues.pace,
      time: 0,
    }),
    'time'
  );
});

test('calculates pace for both distance and time entry orders', () => {
  assert.equal(
    getCalculation({
      lastChanged: 'time',
      distance: enteredValues.distance,
      pace: 0,
      time: enteredValues.time,
    }),
    'pace'
  );
  assert.equal(
    getCalculation({
      lastChanged: 'distance',
      distance: enteredValues.distance,
      pace: 0,
      time: enteredValues.time,
    }),
    'pace'
  );
});

test('calculates distance for both pace and time entry orders', () => {
  assert.equal(
    getCalculation({
      lastChanged: 'time',
      distance: 0,
      pace: enteredValues.pace,
      time: enteredValues.time,
    }),
    'distance'
  );
  assert.equal(
    getCalculation({
      lastChanged: 'pace',
      distance: 0,
      pace: enteredValues.pace,
      time: enteredValues.time,
    }),
    'distance'
  );
});

test('recalculates the expected dependent value when all fields are populated', () => {
  const values = {
    distance: enteredValues.distance,
    pace: enteredValues.pace,
    time: enteredValues.time,
  };

  assert.equal(getCalculation({ ...values, lastChanged: 'distance' }), 'time');
  assert.equal(getCalculation({ ...values, lastChanged: 'pace' }), 'time');
  assert.equal(getCalculation({ ...values, lastChanged: 'time' }), 'pace');
});

test('does not calculate until two positive values are available', () => {
  assert.equal(
    getCalculation({ lastChanged: 'distance', distance: 10, pace: 0, time: 0 }),
    null
  );
  assert.equal(
    getCalculation({ lastChanged: 'pace', distance: 0, pace: 300, time: 0 }),
    null
  );
  assert.equal(
    getCalculation({ lastChanged: 'time', distance: 0, pace: 0, time: 3000 }),
    null
  );
  assert.equal(
    getCalculation({ lastChanged: null, ...enteredValues }),
    null
  );
});
