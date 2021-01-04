const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(object, array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const order = {};
    if (array[i] in object) {
      order.key = array[i];
      order.value = object[array[i]];
      result.push(order);
      // eslint-disable-next-line no-param-reassign
      delete object[array[i]];
    }
  }
  const entries = Object.entries(object).sort();
  for (const [key, value] of entries) {
    result.push({ key, value });
  }
  return result;
}
orderByProps(obj, ['health', 'defence']);
