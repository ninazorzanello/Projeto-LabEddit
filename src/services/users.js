import axios from "axios";
import {BASE_URL} from "../constants/urls";
import {goToFeed }from "../routes/Coordinator";



export const login = (form, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        clear();
        setRightButtonText("Logout")
        goToFeed(navigate)
    })
    .catch((error)=>alert (error.response.data.message))
}

export const signup = (form, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        clear();
        setRightButtonText("Logout")
        goToFeed(navigate)
    })
    .catch((error)=>alert("Usuário ou senha incorretos!"))
}


export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert(res.data)
        clear()
    })
    .catch((error)=> alert(error.response))
}


export const createComment = (body, clear, id) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert(res.data)
        clear()
    })
    .catch((error)=> alert(error.response))
}
