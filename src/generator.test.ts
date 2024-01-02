import anonyname from './generator';

test('Should generate identities', () => {
  /* GIVEN */
  const emptySeedPhrase = '';
  const SeedPhrase0 = '0';
  const SeedPhrase1 = '1';
  const SeedPhrase2 = '2';
  const SeedPhrase3 = '3';
  const SeedPhrase4 = '4';
  const SeedPhrase5 = '5';
  const SeedPhrase6 = '6';
  const SeedPhrase7 = '7';
  const SeedPhrase8 = '8';
  const SeedPhrase9 = '9';
  const SeedPhrase10 = 'the seed phrase';

  /* WHEN */
  const emptySeedPhraseResult = anonyname(emptySeedPhrase);
  const SeedPhrase0Result = anonyname(SeedPhrase0);
  const SeedPhrase1Result = anonyname(SeedPhrase1);
  const SeedPhrase2Result = anonyname(SeedPhrase2);
  const SeedPhrase3Result = anonyname(SeedPhrase3);
  const SeedPhrase4Result = anonyname(SeedPhrase4);
  const SeedPhrase5Result = anonyname(SeedPhrase5);
  const SeedPhrase6Result = anonyname(SeedPhrase6);
  const SeedPhrase7Result = anonyname(SeedPhrase7);
  const SeedPhrase8Result = anonyname(SeedPhrase8);
  const SeedPhrase9Result = anonyname(SeedPhrase9);
  const SeedPhrase10Result = anonyname(SeedPhrase10);

  /* THEN */
  expect(emptySeedPhraseResult).toEqual('Khalita "Baltiysk" Bellah');
  expect(SeedPhrase0Result).toEqual('Fontaynah "Alcantarilla" Lydic');
  expect(SeedPhrase1Result).toEqual('Grover "Calasparra" Beeks');
  expect(SeedPhrase2Result).toEqual('Nila "Waldbrunn" Alaimo');
  expect(SeedPhrase3Result).toEqual('Hurlee "Skalavik" Evick');
  expect(SeedPhrase4Result).toEqual('Leshem "Itapecerica" Fridge');
  expect(SeedPhrase5Result).toEqual('Calvyn "Bobrov" Carfagna');
  expect(SeedPhrase6Result).toEqual('Bonifacio "Russas" Zisman');
  expect(SeedPhrase7Result).toEqual('Lyneth "Barneveld" Cavicchi');
  expect(SeedPhrase8Result).toEqual('Xyla "Floriano" Koska');
  expect(SeedPhrase9Result).toEqual('Hendrickson "Binefar" Devillier');
  expect(SeedPhrase10Result).toEqual('Theophile "Toritama" Brodzik');
});
