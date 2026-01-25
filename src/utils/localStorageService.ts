export const storage = {
  set: <T>(key: string, value: T[]): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Fehler beim Speichern:", error);
    }
  },

  get: <T>(key: string): T[] => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T[]) : [];
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      return [];
    }
  },

  add: <T>(key: string, newItem: T): void => {
    try {
      const currentArray = storage.get<T>(key);
      currentArray.push(newItem);
      storage.set(key, currentArray);
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Elements:", error);
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
