import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import CardPost from "../../components/CardPosts/CardPost";
import usePostsList from "../../hooks/usePostsList";
import {BASE_URL} from "../../constants/urls";
import { goToPost } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from "@material-ui/core";
import {AddPostsContainer, InputsContainer, DivForm, DivTitulo} from "./styled";
import useForm from "../../hooks/useForm";
import {createPost} from "../../services/users"


const FeedPage = () => {
    useProtectedPage()

    const navigate = useNavigate()

    const posts = usePostsList([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        console.log(id)
        goToPost(navigate, id)
      }

    const listPosts = posts.map((posts)=>{
        return (
            <CardPost 
                id={posts.id}
                body={posts.body}
                title={posts.title}
                commentCount={posts.commentCount}
                userVote={posts.userVote}
                voteSum={posts.voteSum}
               

            /> 
        )
    })
  
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
       
    }
    return (
        <div>
           
                <DivForm>
                    <DivTitulo>Comece Postando...</DivTitulo>
                    <form onSubmit={onSubmitForm}>
                        <AddPostsContainer>
                            <InputsContainer>
                                <TextField
                                    name={"title"}
                                    value={form.title}
                                    onChange={onChange}
                                    label={'Título do Post...'}
                                    variant={'outlined'}
                                    fullWidth
                                    required
                                    autoFocus
                                    margin={'normal'}
                                />
                                <TextField
                                    name={"body"}
                                    value={form.body}
                                    onChange={onChange}
                                    label={'Escreva uma legenda...'}
                                    variant={'outlined'}
                                    fullWidth
                                    required
                                    autoFocus
                                    margin={'normal'}
                                />
                            </InputsContainer>
                                    <Button
                                        color={'primary'}
                                        variant={'contained'}
                                        type={'submit'}
                                        fullWidth
                                    >
                                    Adicionar Post
                                    </Button>
                        </AddPostsContainer>
                    </form>
                </DivForm>

            {listPosts}
            
        </div>
    )
}

export default FeedPage