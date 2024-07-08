import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Layout = () => {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && userId) {
            navigate("/dashboard")
        }

    }, [isLoaded, userId])

    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <Outlet />
    )
}   