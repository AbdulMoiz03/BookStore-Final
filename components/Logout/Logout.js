import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import classes from "./Logout.module.css";

export default function LogoutButton() {
    const { logout } = useContext(AuthContext);

    return <button className={classes.logoutButton} onClick={logout}>Logout</button>;
}
