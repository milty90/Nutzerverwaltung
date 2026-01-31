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
      if (!item) return [];

      const data = JSON.parse(item);

      // Fix old /public/ paths
      if (Array.isArray(data)) {
        const fixedData = data.map((user: any) => {
          if (user.img && user.img.startsWith("/public/")) {
            return { ...user, img: user.img.replace("/public/", "/") };
          }
          return user;
        });

        // Save fixed data if changes were made
        if (JSON.stringify(fixedData) !== JSON.stringify(data)) {
          this.set(key, fixedData);
        }

        return fixedData;
      }

      return data;
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      return [];
    }
  },
};
