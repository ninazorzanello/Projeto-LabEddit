import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import {goToFeed} from "../routes/Coordinator";

const useUnprotectedPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Não está logado!!!");
      goToFeed(navigate)
    }
  }, []);
} 

export default useUnprotectedPage;