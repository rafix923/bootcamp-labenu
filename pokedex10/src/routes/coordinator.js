
export const goToPokemonList = (navigate) => { navigate("/") }

export const goToPokedex = (navigate) => { navigate("/pokedex") }

export const goToPokemonDetail = (navigate, name) => { navigate(`/pokemon/${name}`) }

export const goToPreviousPage = (navigate) => { navigate(-1) }
