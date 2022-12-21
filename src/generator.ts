import SHA1 from 'sha1';
import { FIRSTNAMES } from './firstnames';
import { NICKNAMES } from './nicknames';
import { LASTNAMES } from './lastnames';

const anonyname = (key: string) => {
  const keyIndex = BigInt(`0x${SHA1(key)}`);
  const firstname = FIRSTNAMES[Number(keyIndex % BigInt(FIRSTNAMES.length))];
  const nickname = NICKNAMES[Number(keyIndex % BigInt(NICKNAMES.length))];
  const lastname = LASTNAMES[Number(keyIndex % BigInt(LASTNAMES.length))];
  return `${firstname} "${nickname}" ${lastname}`;
};

export default anonyname;
