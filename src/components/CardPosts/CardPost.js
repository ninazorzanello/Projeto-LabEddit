import React from "react";
import {CardContainer, DivCardsLista, DivTitulo, DivComentario, DivQuantidadeComentarios, DivSomaVotos, DivVotar} from "./Styled";
import { goToPost } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const CardPost = (props) => {
    const navigate = useNavigate()
    const onClickPost = (id) => {
        goToPost(navigate, id)
      }

    return (
        <CardContainer onClick={() => onClickPost(props.id)}>  

                
                <DivCardsLista>
                    <DivTitulo>
                        Título: {props.title.toUpperCase()} 
                    </DivTitulo>
                    <DivComentario>
                        Comentáro: {props.body} 
                    </DivComentario>
                   
                    <DivQuantidadeComentarios>
                        Quantidade de comentários: {props.commentCount} 
                    </DivQuantidadeComentarios>
                    <DivVotar>
                        Votar neste Post: {props.userVote} 
                    </DivVotar>
                    <DivSomaVotos>
                        Somatório de Votos: {props.voteSum} 
                    </DivSomaVotos>
                </DivCardsLista>


        </CardContainer>

    )
}

export default CardPost