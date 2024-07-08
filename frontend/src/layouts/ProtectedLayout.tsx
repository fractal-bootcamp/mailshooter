import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedLayout = () => {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        if (isLoaded && !userId) {
            console.log("redirecting to sign in")
            navigate("/")
        }

    }, [isLoaded, userId])

    if (!isLoaded) {
        return <div>Loading...</div>
    }


    return (
        <Outlet />

    )
}