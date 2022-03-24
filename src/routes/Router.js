import React from "react";
import { Routes, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/index";
import FeedPage from "../pages/FeedPage/index";
import LoginPage from "../pages/LoginPage/index";
import PostPage from "../pages/PostPage/index";



const Router = ({setRightButtonText}) => {
    return (      
            <Routes>
                <Route path="/" element ={<LoginPage  setRightButtonText={setRightButtonText}/>} />
                <Route path="/cadastropage" element ={<CadastroPage setRightButtonText={setRightButtonText} />} />
                <Route path="/feedpage" element ={<FeedPage />} />
                <Route path="/postpage/:id" element ={<PostPage />} />
                <Route path="*" element ={<h1>Página não encontrada!</h1>} />
            </Routes>
    )
}

export default Router