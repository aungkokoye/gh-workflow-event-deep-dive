import '@testing-library/jest-dom';


describe('Dummy fail test', () => {
  test('this test is supposed to fail', () => {
    // Force a failure
    expect(true).toBe(false);
  });
});
