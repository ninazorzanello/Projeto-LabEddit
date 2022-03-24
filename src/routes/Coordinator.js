

export const goToLogin = (navigate) => {
  navigate("/")
}

export const goToCadastro = (navigate) => {
  navigate("/cadastropage" )
}

export const goToFeed = (navigate) => {
  navigate("/feedpage")
}

export const goToPost = (navigate, id) => {
  navigate(`/postpage/${id}`)
}

export const goToError = (navigate) => {
  navigate("/error")
}