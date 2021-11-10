import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvder/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;