import orderByProps from '../order';

test('orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect([
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]).toEqual(orderByProps(obj, ['defence', 'level']));
});
