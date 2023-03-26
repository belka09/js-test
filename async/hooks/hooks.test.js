import { it, expect } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  const user = new User(testEmail);
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  const user = new User(testEmail);

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  const user = new User(testEmail);

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  const user = new User(testEmail);
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  const user = new User(testEmail);
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
