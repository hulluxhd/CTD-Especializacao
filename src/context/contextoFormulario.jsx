// Aqui devemos criar nosso contexto e nosso provider.

const { useReducer, useContext, createContext } = require("react");

const initialState = {
    treinador: {
        sobrenome: '',
        email: '',
        nome: '',
    },
    pokemon: {
        nomePokemon: '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: '',
        idadePokemon: ''
    }

}

export const InfoContext = createContext()

const reducer = (state, action) => {
    if (action.type === "ATUALIZAR_TREINADOR") {
        return {
            ...state,
            treinador: {
                ...state.treinador,
                [action.payload.field]: action.payload.value
            }
        }
    }
    if (action.type === "ATUALIZAR_POKEMON") {
        return {
            ...state,
            pokemon: {
                ...state.pokemon,
                [action.payload.field]: action.payload.value
            }
        }
    }
    return alert('erro')
}

export default function ReducerProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <InfoContext.Provider value={{ dispatch, state }}>{children}</InfoContext.Provider>
    )
}
