export const storage = {
  set: (key: string, value: any): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Fehler beim Speichern:", error);
    }
  },

  get: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      return [];
    }
  },
};
