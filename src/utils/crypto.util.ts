import * as CryptoJS from 'crypto-js';

export default class CryptoUtil {
  static async hashPassword(password: string): Promise<string> {
    return CryptoJS.HmacMD5(password, 'Secret Passphrase').toString();
  }

  static async generateHash(str: string): Promise<string> {
    return CryptoJS.MD5(str).toString();
  }
}
