import { useForm } from "./Hook/useForm";


interface FormData {
    street: string,
    number: number
}

export const Formulario2 = () => {
   const {street, number, handleChanges} = useForm<FormData>({
    street: 'siempre viva',
    number: 123
   });
    
  return (
    <>
      <h3>Formulario</h3>
      <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label"> Email: </label>
            <input type="text" name="street"
                    className="form-control"
                    value={street}
                    onChange={(e) => handleChanges(e) } />
            
        </div>
        <div>
            <label className="form-label">First Name</label>
            <input type="text" name="number"
                    className="form-control"
                    value={number}
                    onChange={(e) => handleChanges(e) } />
        </div>
      </form>
      <pre>{ street } - {number}</pre>
    </>
  )
}
