import fetchData from '../http';
import { getLevel } from '../index';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test.each([
  {
    userId: 88,
    mockValue: { status: 'ok', level: '15' },
    extended: 'Ваш текущий уровень: 15',
  },
  {
    userId: 25,
    mockValue: { status: 'ok', level: '8' },
    extended: 'Ваш текущий уровень: 8',
  },
  {
    userId: -1,
    mockValue: { status: 'error' },
    extended: 'Информация об уровне временно недоступна',
  },
  {
    userId: 105,
    mockValue: { status: 'error' },
    extended: 'Информация об уровне временно недоступна',
  },
])('should call getLevel once', (request) => {
  fetchData.mockReturnValue(request.mockValue);
  const result = getLevel(request.userId);
  expect(fetchData).toBeCalledWith(`https://server/user/${request.userId}`);
  expect(result).toBe(request.extended);
});
