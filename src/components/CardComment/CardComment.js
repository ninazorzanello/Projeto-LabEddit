import React from "react";
import {CardContainer, DivCardsLista} from "./Styled";
import { goToPost } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";


const CardComment = (props) => {
    const navigate = useNavigate()

    return (
        <CardContainer>  
      
                <DivCardsLista>
                    Comentário: {props.body}
                </DivCardsLista>


        </CardContainer>

    )
}

export default CardComment