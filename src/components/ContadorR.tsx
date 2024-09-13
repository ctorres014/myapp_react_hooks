import { useReducer } from "react"

const initialState = {
    contador: 0
}

type ActionType = 
    | { type: 'increment' }
    | { type: 'subtract' }
    | { type: 'custom', payload: number}

const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'subtract':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }

}

const ContadorR = () => {
    const [counterState, dispatch] = useReducer(contadorReducer, initialState);
    
  return (
    <>
      <h3>Contador: {counterState.contador}</h3>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'increment'})}>+1</button>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'subtract'})}>-1</button>
      <button className="btn btn-outline-danger" onClick={() => dispatch({ type: 'custom', payload: 100})}>100</button>
    </>
  )
}

export default ContadorR
