import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear old session data and set new default user
    localStorage.removeItem("starter_user");

    // Set default user
    const defaultUser = {
      id: "1",
      email: "bo.albert@email.com",
      firstName: "BO'O",
      lastName: "ALBERT",
      avatar: null,
      role: "entrepreneur",
      createdAt: new Date().toISOString(),
    };
    setUser(defaultUser);
    localStorage.setItem("starter_user", JSON.stringify(defaultUser));
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login - accepts any credentials
    const mockUser = {
      id: "1",
      email,
      firstName: "BO'O",
      lastName: "ALBERT",
      avatar: null,
      role: "entrepreneur",
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem("starter_user", JSON.stringify(mockUser));
    return mockUser;
  };

  const signup = (userData) => {
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: "entrepreneur",
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem("starter_user", JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("starter_user");
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
