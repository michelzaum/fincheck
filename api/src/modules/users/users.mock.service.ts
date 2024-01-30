import { UsersService } from './users.service';

export const createMockUsersService = (): Partial<UsersService> => {
  return {
    getUserById: jest.fn(),
  };
};
