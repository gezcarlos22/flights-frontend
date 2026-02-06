'use client';

import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Función para inicializar el estado desde localStorage
function initializeAuth() {
  const savedUsername = localStorage.getItem('authUsername');
  return savedUsername;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return initializeAuth();
    }
    return null;
  });
  
  // Derivar isAuthenticated del username para evitar cascading renders
  const isAuthenticated = !!username;

  const login = async (username: string, password: string) => {
    // Validar credenciales (hardcodeadas)
    if (username === 'admin' && password === '1234') {
      setUsername(username);
      localStorage.setItem('authUsername', username);
    } else {
      throw new Error('Credenciales inválidas');
    }
  };

  const logout = () => {
    setUsername(null);
    localStorage.removeItem('authUsername');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
}
