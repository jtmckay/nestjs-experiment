import { pgClient } from '../src/db/client';

describe('given a postgres connection', () => {
  let client;
  beforeEach(async () => {
    client = await pgClient();
  });

  describe('when querying the db', () => {
    let result;
    beforeEach(async () => {
      result = await client.query('SELECT $1::text as message', [
        'Hello world!',
      ]);
    });

    it('returns a message without error', () => {
      expect(result.rows[0].message).toBe('Hello world!');
    });
  });
});
