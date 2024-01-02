import SHA1 from 'sha1';
import { FIRSTNAMES } from './firstnames';
import { NICKNAMES } from './nicknames';
import { LASTNAMES } from './lastnames';

const anonyname = (seedPhrase: string) => {
  const seedPhraseIndex = BigInt(`0x${SHA1(seedPhrase)}`);
  const firstname = FIRSTNAMES[Number(seedPhraseIndex % BigInt(FIRSTNAMES.length))];
  const nickname = NICKNAMES[Number(seedPhraseIndex % BigInt(NICKNAMES.length))];
  const lastname = LASTNAMES[Number(seedPhraseIndex % BigInt(LASTNAMES.length))];
  return `${firstname} "${nickname}" ${lastname}`;
};

export default anonyname;
