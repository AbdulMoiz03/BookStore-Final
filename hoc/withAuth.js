import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const { user } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            if (!user || !user.email) {
                // Redirect to login page if not authenticated
                router.replace("/Login");
            }
        }, [user, router]);

        // Render the component only if the user is authenticated
        return user && user.email ? <WrappedComponent {...props} /> : null;
    };
};

export default withAuth;
