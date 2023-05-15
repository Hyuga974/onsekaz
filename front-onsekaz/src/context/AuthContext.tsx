import React from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
