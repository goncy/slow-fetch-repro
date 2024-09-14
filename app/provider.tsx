'use client'

import { createContext, useContext, ReactNode } from 'react';

// Define the shape of your state
export interface AppState {
  createdAt: string;
  title: string;
  content: string;
  id: string;
}

// Create a context with a default value
const AppStateContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  initialState: AppState;
  children: ReactNode;
}

export function AppProvider({ initialState, children }: AppProviderProps) {
  return (
    <AppStateContext.Provider value={initialState}>
      {children}
    </AppStateContext.Provider>
  );
}

// Custom hook to use the app state
export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
}
