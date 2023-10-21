import fetchData from './http';

export function getLevel(userId) {
  console.log(userId);
  const response = fetchData(`https://server/user/${userId}`);
  console.log(response);
  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}

// console.log(getLevel(1));
// console.log(getLevel(88));
// console.log(getLevel(-1));
// console.log(getLevel(101));
