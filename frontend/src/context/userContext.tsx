import { useState, createContext, useContext, useCallback } from "react";

const UserContext = createContext({ state: {}, actions: {} });

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null);

    const value = {
        state: { user },
        actions: { setUser }
    };

    // // fetch and hit /auth/login

    // const fetchUser = useCallback(async () => {
    //     const response = await fetch("/auth/login");
    //     const data = await response.json();
    //     setUser(data);
    // }, []);




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