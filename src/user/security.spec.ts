import { hashPassword } from './security';

describe('security', () => {
  describe('given a raw password', () => {
    const password = 'test';

    describe('when hashed', () => {
      const hashed = hashPassword(password);

      it('returns the same hash', () => {
        expect(hashed).toBe('n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=');
      });
    });
  });

  describe('given a different raw password', () => {
    const password = 'testb';

    describe('when hashed', () => {
      const hashed = hashPassword(password);

      it('returns a different hash', () => {
        expect(hashed).not.toBe('n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=');
      });
    });
  });
});
