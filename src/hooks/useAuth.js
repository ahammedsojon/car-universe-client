import { useContext } from "react";
import { AuhtContext } from "../contexts/AuthProvider";

const useAuth = ()=>{
return useContext(AuhtContext);
}

export default useAuth;