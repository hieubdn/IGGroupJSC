import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  loading: number;
}

interface AppContextType {
  state: AppState;
  setLoading: (isLoading: boolean) => void;
}

const initialState: AppState = {
  loading: 0
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: any) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload ? state.loading + 1 : state.loading - 1
      };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  return (
    <AppContext.Provider value={{ state, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 