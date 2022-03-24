import {useState, useEffect} from "react";
import axios from "axios";

const useCommentPost = (initialComment, url) => {

    const [comment, setComment] = useState(initialComment);

        useEffect(() => {
          axios.get(url, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          })
            .then((response) => {
                setComment(response.data);
            })
            .catch((error) => {
              console.log(error)
              alert('Ocorreu um erro.')
            })
        }, [url])

        return (comment)
    }

export default useCommentPost