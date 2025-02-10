import fs from 'fs';

const commitMessageRegex = /^(feat|feature|fix|bugfix|release): \d{3} .+$/;

const commitMessageFile = process.argv[2];
const commitMessageRaw = fs.readFileSync(commitMessageFile, 'utf-8');

const commitMessage = commitMessageRaw
  .split('\n')
  .filter(line => !line.startsWith('#'))
  .join('\n')
  .trim();

console.log('Сообщение коммита после фильтрации:', commitMessage);

if (!commitMessageRegex.test(commitMessage)) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    `Ошибка: Сообщение коммита должно соответствовать формату:
  <type>: <номер> <описание>

  Где:
    <type> = feat|feature|fix|bugfix|release
    <номер> = трёхзначное число (например, 001, 002)

  Пример:
    feat: 003 Добавил новую фичу`
  );
  process.exit(1);
}

console.log('\x1b[32m%s\x1b[0m', 'Сообщение коммита прошло проверку!');
