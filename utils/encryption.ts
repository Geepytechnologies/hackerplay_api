import CryptoJS from 'crypto-js';
import { Constants } from 'src/constants';

export class Encryption {
  static encryptData = (data: any) => {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      Constants.secret,
    ).toString();
  };
  static decryptData = (ciphertext: any) => {
    if (ciphertext !== null) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, Constants.secret);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
  };
}
