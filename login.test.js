const login = require('./login');

test('Login successful with correct username and password', () => {
    expect(login('admin', '123')).toBe(true);
});

test('Login fails with incorrect password', () => {
    expect(login('admin', '1234')).toBe(false);
});

test('Login fails with incorrect username', () => {
    expect(login('user', '123')).toBe(false);
});
