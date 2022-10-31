export default class LocalStorageUtil {
  static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
