import { useAuth } from "@clerk/clerk-react";
import { useState, createContext, useContext, useCallback, useEffect } from "react";

type AdminUser = {
    id: string;
    email: string;
    name: string;
    clerkId: string;
    createdAt: string;
    updatedAt: string;
}

const UserContext = createContext<AdminUser | null>(null);


const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const clerkAuth = useAuth();

    const [user, setUser] = useState<AdminUser | null>(null);

    const value = user;

    const getUserFromBackend = useCallback(async () => {
        const token = await clerkAuth.getToken();
        if (token) {
            const response = await fetch("http://localhost:3000/auth/login", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUser(data);
            console.log(data)
        } else {
            console.error("Failed to retrieve token");
        }
    }, [clerkAuth]);

    useEffect(() => {
        getUserFromBackend();
    }, []);

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