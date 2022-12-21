import anonyname from './generator';

test('Should generate identities', () => {
  /* GIVEN */
  const emptyKey = '';
  const Key0 = '0';
  const Key1 = '1';
  const Key2 = '2';
  const Key3 = '3';
  const Key4 = '4';
  const Key5 = '5';
  const Key6 = '6';
  const Key7 = '7';
  const Key8 = '8';
  const Key9 = '9';

  /* WHEN */
  const emptyKeyResult = anonyname(emptyKey);
  const Key0Result = anonyname(Key0);
  const Key1Result = anonyname(Key1);
  const Key2Result = anonyname(Key2);
  const Key3Result = anonyname(Key3);
  const Key4Result = anonyname(Key4);
  const Key5Result = anonyname(Key5);
  const Key6Result = anonyname(Key6);
  const Key7Result = anonyname(Key7);
  const Key8Result = anonyname(Key8);
  const Key9Result = anonyname(Key9);

  /* THEN */
  expect(emptyKeyResult).toEqual('Khalita "Baltiysk" Bellah');
  expect(Key0Result).toEqual('Fontaynah "Alcantarilla" Lydic');
  expect(Key1Result).toEqual('Grover "Calasparra" Beeks');
  expect(Key2Result).toEqual('Nila "Waldbrunn" Alaimo');
  expect(Key3Result).toEqual('Hurlee "Skalavik" Evick');
  expect(Key4Result).toEqual('Leshem "Itapecerica" Fridge');
  expect(Key5Result).toEqual('Calvyn "Bobrov" Carfagna');
  expect(Key6Result).toEqual('Bonifacio "Russas" Zisman');
  expect(Key7Result).toEqual('Lyneth "Barneveld" Cavicchi');
  expect(Key8Result).toEqual('Xyla "Floriano" Koska');
  expect(Key9Result).toEqual('Hendrickson "Binefar" Devillier');
});
