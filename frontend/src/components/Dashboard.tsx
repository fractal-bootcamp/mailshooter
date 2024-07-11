import { ClerkProvider, SignOutButton, useAuth } from "@clerk/clerk-react";

export const Dashboard = () => {
  const clerkAuth = useAuth();

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
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>GET AUTH</button>
      <SignOutButton />
    </div>
  );
};
