import {useState, useEffect} from "react";
import axios from "axios";

const usePostsList = (initialPosts, url) => {

    const [posts, setPosts] = useState(initialPosts);

        useEffect(() => {
          axios.get(url, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          })
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
              console.log(error)
              alert('Ocorreu um erro.')
            })
        }, [url])

        return (posts)
    }

export default usePostsList