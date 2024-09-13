import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    const incremental = (increment: number = 1, e?: any) => {
        setCounter(counter + increment);
        console.log('variable e:', e);
        
    }
  return (
    <div className='mt-5'>
      
      <h3>Counter</h3>
      <span>Valor {counter} </span>
      <br />
      <button onClick={() => incremental()} className='btn btn-outline-primary mt-2'>
        +1
      </button>
      <button onClick={(e) => incremental(2, e)} className='btn btn-outline-primary mt-2'>
        +2
      </button>
      <button onClick={() => setCounter(0)} className='btn btn-outline-danger mt-2'>
        Reset
      </button>
    </div>
  )
}

export default Counter
