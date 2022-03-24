import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {StyledToolBard} from "./Styled";
import {goToCadastro, goToLogin, goToFeed} from "../../routes/Coordinator";
import  {useNavigate}  from 'react-router-dom';



const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    
    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(navigate)
        
      }else{
        goToLogin(navigate)
      }
    }

  return (
 
      <AppBar position="static">
        <StyledToolBard>
          <Typography variant="h6">
            <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
          </Typography>
          <Button onClick={() => goToCadastro(navigate)} color="inherit">Cadastre-se</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBard>
      </AppBar>
   
  );
}

export default Header