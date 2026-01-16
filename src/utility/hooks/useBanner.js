"use client";

import { useEffect, useState } from "react";

/**
 * Hook to check if the component has mounted
 * @returns {boolean} - Whether the component has mounted
 */
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

/**
 * Custom hook for localStorage interaction
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Default value if key doesn't exist
 * @returns {Array} - [storedValue, setValue, isLoaded]
 */
function useLocalStorage(key, initialValue) {
  // Initialize with initialValue on server side
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasMounted = useHasMounted();

  // Only run on the client-side after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
        setIsLoaded(true);
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        setIsLoaded(true);
      }
    }
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, isLoaded && hasMounted];
}

/**
 * Hook to manage banner visibility based on localStorage
 * @param {Object} options
 * @param {string} options.id - Unique identifier for the banner
 * @returns {Object} - { visible, dismissBanner }
 */
export default function useBanner({ id }) {
  const storageKey = `banner_dismissed_${id}`;
  const [isDismissed, setIsDismissed, isReady] = useLocalStorage(
    storageKey,
    false,
  );

  const dismissBanner = () => {
    setIsDismissed(true);
  };

  return {
    visible: isReady ? !isDismissed : false,
    dismissBanner,
  };
}
