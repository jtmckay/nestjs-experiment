import * as Base64 from 'crypto-js/enc-base64';
import * as sha256 from 'crypto-js/sha256';

export function hashPassword(password: string): string {
  return Base64.stringify(sha256(password));
}
