export const storage = {
    get<T>(key: string): T | null {
      if (typeof window === 'undefined') return null;
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch {
        return null;
      }
    },
  
    set<T>(key: string, value: T): void {
      if (typeof window === 'undefined') return;
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // storage unavailable or quota exceeded
      }
    },
  
    remove(key: string): void {
      if (typeof window === 'undefined') return;
      try {
        window.localStorage.removeItem(key);
      } catch {
        // ignore errors
      }
    },
  };