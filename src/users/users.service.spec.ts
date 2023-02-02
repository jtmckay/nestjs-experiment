import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('given a raw password', () => {
    const password = 'test';

    describe('when hashed', () => {
      let hashed;

      beforeAll(() => {
        hashed = service.hashPassword(password);
      });

      it('returns the same hash', () => {
        expect(hashed).toBe(
          '3vIbQIMmxYuQbSOC//oshCGA71ppJ1gqoGqPSYSmGvY3pg29FOlQu+9vLQVpGoCiVKIeG/3bwDFCVI5KYNgVr34QVczA51IvQKqWVX67L4pWki8CP8cPo1aG4xWgciSdA/JAfw==',
        );
      });
    });
  });

  describe('given a different raw password', () => {
    const password = 'testb';

    describe('when hashed', () => {
      let hashed;

      beforeAll(() => {
        hashed = service.hashPassword(password);
      });

      it('returns a different hash', () => {
        expect(hashed).not.toBe(
          '3vIbQIMmxYuQbSOC//oshCGA71ppJ1gqoGqPSYSmGvY3pg29FOlQu+9vLQVpGoCiVKIeG/3bwDFCVI5KYNgVr34QVczA51IvQKqWVX67L4pWki8CP8cPo1aG4xWgciSdA/JAfw==',
        );
      });
    });
  });
});
