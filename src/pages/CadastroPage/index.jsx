import React from "react";
import Button from "@mui/material/Button";
import {DivContainer, InputContainer, DivTitulo} from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {goToFeed }from "../../routes/Coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {signup} from "../../services/users";
import { useNavigate } from "react-router-dom";


const CadastroPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
    const navigate = useNavigate()
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, navigate, setRightButtonText)
       
    }
    return (

        <DivContainer>
            <DivTitulo>Venha ser um LabEddit!</DivTitulo>
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type="username"
                    />
                    
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
                            Cadastrar
                    </Button>

                </form>

            </InputContainer>
       
    </DivContainer>
        
    )
}

export default CadastroPage