import React from "react";
import usePostsList from "../../hooks/usePostsList";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {BASE_URL} from "../../constants/urls";
import CardPost from "../../components/CardPosts/CardPost";
import CardComment from "../../components/CardComment/CardComment";
import { useParams } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import {createComment} from "../../services/users"
import {AddPostsContainer, InputsContainer, DivForm, DivTitulo} from "./styled";
import Button from '@mui/material/Button';
import { TextField } from "@material-ui/core";
import useCommentPost from "../../hooks/useCommentPost";

const PostPage = () => {
    // useUnprotectedPage()
    const params = useParams()

    const posts = usePostsList([], `${BASE_URL}/posts`)

    const listPosts = posts.filter(item => item.id == params.id).map((posts)=>{
        return (
            <CardPost 
                key={posts.posts_id}
                id={posts.id}
                body={posts.body}
                title={posts.title}
                commentCount={posts.commentCount}
                userVote={posts.userVote}
                voteSum={posts.voteSum}

            /> 
        )
    })

    const [form, onChange, clear] = useForm({body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, params.id)
       
    }

    const commentsPosts = useCommentPost([], `${BASE_URL}/posts/${params.id}/comments`)

    const listComment = commentsPosts.map((commentsPosts)=>{
        return (
            <CardComment 
                body={commentsPosts.body}

            /> 
        )
    })

    return (
        <div>
                    {listPosts}
                    {listComment}
            <DivForm>
                <DivTitulo>Post</DivTitulo>
                    <form onSubmit={onSubmitForm}>
                        <AddPostsContainer>
                            <InputsContainer>
                                <TextField
                                    name={"body"}
                                    value={form.body}
                                    onChange={onChange}
                                    label={'Escreva um comentário...'}
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
                                    Adicionar Comentário
                                    </Button>
                        </AddPostsContainer>
                    </form>
            </DivForm>
        </div>
    )
}

export default PostPage