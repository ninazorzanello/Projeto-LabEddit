import React from "react";
import Button from "@mui/material/Button";
import {DivContainer, DivLogo, InputContainer} from "./styled";
import logo from "../../assets/logo.png";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {login} from "../../services/users";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    const [form, onChange, clear] = useForm({email: "", password: ""})
    const navigate = useNavigate()
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
        <DivContainer>
            <DivLogo src={logo}/>
                <InputContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField 
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            variant={"outlined"}
                            fullWidth
                            margin={"dense"}
                            required
                            type="email"
                        />
                        
                        <TextField 
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            label={"Senha"}
                            variant={"outlined"}
                            fullWidth
                            margin={"dense"}
                            required
                            type="password"
                        />
                        
                        <Button 
                            type={"submit"}
                            margin={"dense"}
                            fullWidth 
                            variant="contained">
                                Entrar
                        </Button>

                    </form>

                </InputContainer>
           
        </DivContainer>
    )
}

export default LoginPage
