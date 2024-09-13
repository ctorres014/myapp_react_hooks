import { useForm } from "./Hook/useForm";


interface FormData {
    email: string,
    firstname: string
}

const Formulario = () => {
   const {form, handleChanges} = useForm<FormData>({
    email: '',
    firstname: ''
   });
    
  return (
    <>
      <h3>Formulario</h3>
      <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label"> Email: </label>
            <input type="email" name="email"
                    className="form-control"
                    value={form.email}
                    onChange={(e) => handleChanges(e) } />
            
        </div>
        <div>
            <label className="form-label">First Name</label>
            <input type="text" name="firsname"
                    className="form-control"
                    value={form.firstname}
                    onChange={(e) => handleChanges(e) } />
        </div>
      </form>
      <pre>{JSON.stringify(form)}</pre>
    </>
  )
}

export default Formulario
