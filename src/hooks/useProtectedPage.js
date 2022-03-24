import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import {goToLogin} from "../routes/Coordinator";

const useProtectedPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Não está logado!!!");
      goToLogin(navigate)
    }
  }, []);
} 

export default useProtectedPage;
