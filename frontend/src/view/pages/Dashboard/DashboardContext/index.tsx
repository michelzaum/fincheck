import React, { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValueVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(() => {
    const areValuesVisibleFromLocalStorage = localStorage.getItem('fincheck:areValuesVisible');

    if (areValuesVisibleFromLocalStorage !== null) {
      return JSON.parse(areValuesVisibleFromLocalStorage);
    }
    return  true;
  });

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => {
      localStorage.setItem('fincheck:areValuesVisible', JSON.stringify(!prevState));
      return !prevState;
    });
  }, []);

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValueVisibility,
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
