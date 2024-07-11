import { useState, createContext, useContext } from "react";

const UserContext = createContext({ state: {}, actions: {} });

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null);

    const value = {
        state: { user },
        actions: { setUser }
    };


    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    return useContext(UserContext);
}

export { UserContext, UserProvider, useUser };