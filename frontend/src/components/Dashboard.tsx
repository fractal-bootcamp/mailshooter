import { ClerkProvider, SignOutButton, useAuth } from "@clerk/clerk-react";
import { useCallback, useState } from "react";

export const Dashboard = () => {
  const clerkAuth = useAuth();
  const [user, setUser] = useState(null); // remove this later when we have a user context


  const handleClick = async () => {
    const token = await clerkAuth.getToken();
    if (token) {
      console.log(token);
      await fetch("http://localhost:3000/auth/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      console.error("Failed to retrieve token");
    }
  };

  const handleOtherClick = async () => {
    const token = await clerkAuth.getToken();

    const response = await fetch("http://localhost:3000/auth/login", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    setUser(data);
    console.log(data)

  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>GET AUTH</button>
      <button onClick={handleOtherClick}>GET USER</button>

      <SignOutButton />
    </div>
  );
};
