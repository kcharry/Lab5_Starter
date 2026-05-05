// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number (123-456-7890)', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number ((123) 456-7890)', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number (missing digits)', () => {
  expect(isPhoneNumber('123-45-7890')).toBe(false);
});

test('invalid phone number (letters included)', () => {
  expect(isPhoneNumber('abc-123-ghij')).toBe(false);
});


// isEmail
test('valid email (test@example.com)', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email (user123@test.co)', () => {
  expect(isEmail('user123@test.co')).toBe(true);
});

test('invalid email (missing @)', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email (missing domain)', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// isStrongPassword
test('valid password (a123)', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('valid password (A_user123)', () => {
  expect(isStrongPassword('A_user123')).toBe(true);
});

test('invalid password (starts with number)', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

test('invalid password (too short)', () => {
  expect(isStrongPassword('a1')).toBe(false);
});

// isDate
test('valid date (1/1/2020)', () => {
  expect(isDate('1/1/2026')).toBe(true);
});

test('valid date (12/31/2023)', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('invalid date (wrong format)', () => {
  expect(isDate('2026-01-01')).toBe(false);
});

test('invalid date (missing year digits)', () => {
  expect(isDate('1/1/26')).toBe(false);
});


// isHexColor
test('valid hex (#fff)', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex (#123abc)', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('invalid hex (wrong characters)', () => {
  expect(isHexColor('#zzzzzz')).toBe(false);
});

test('invalid hex (wrong length)', () => {
  expect(isHexColor('#1234')).toBe(false);
});