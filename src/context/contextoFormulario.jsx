// Aqui devemos criar nosso contexto e nosso provider.

const { useReducer, useContext, createContext } = require("react");

const initialState = {
    nomePokemon: '',
    sobrenome: '',
    email: '',
    nome: '',
}

export const InfoContext = createContext()

export default function ReducerProvider({ children }) {


    const reducer = (state, action) => {
        if (action.type === "ATUALIZAR") {
            return {
                ...state,
                [action.event.name]: action.event.value
            }
        }
        return alert('erro')
    }



    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <InfoContext.Provider value={{ dispatch, state }}>{children}</InfoContext.Provider>
    )
}
