import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

// const tempUser: User = {
//     uid: '123abc',
//     name: 'Claudio Torres'
// }

const User = () => {
    const [user, setUser] = useState<User>();
    
    const login = () =>{
       setUser({
        uid: '123abc',
        name: 'Claudio Torres'
       }) 
    };
  return (
    <div className="mt-5">
      {/* <h3>User: useState</h3> */}
      <button onClick={ login } className="btn btn-outline-primary">Login</button>
      {
        (!user) ? <pre> No hay usuario </pre> 
                : <pre> { JSON.stringify(user) } </pre>
      }
    </div>
  )
}

export default User
