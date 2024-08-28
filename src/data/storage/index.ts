type StorageKeys = "cart";

export const storage = {
  set<T>(key: StorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get<T>(key: StorageKeys): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
};
