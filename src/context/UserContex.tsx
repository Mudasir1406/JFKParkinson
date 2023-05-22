import React, {createContext, useState, useContext} from 'react';

interface User {
  name: string;
  age?: number | undefined;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
