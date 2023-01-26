import React, {useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = (props) => {
    const {stock, initial, onAdd} = props
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => { 
 
        setCount(count -1 )
    }
    const increase = () => {

        setCount(count +1)
    }

    useEffect(() => {
        setCount(parseInt(initial));

    },[initial])
  return (
    <div className='row counter align-content-center align-items-center px-3'>
        <div className="col-8 text-end px-0 pt-3">
            <button className='btn btn-light btn-sm' disabled={count <= 1} onClick={decrease}> - </button>
            <span className='text-count px-3'> {count} </span>
            <button className='btn btn-light btn-sm' disabled={ count >= stock} onClick={increase}> + </button>
        </div>
        <div className="col-4 text-end pt-3">
            <button className='btn btn-primary' disabled={stock <= 0} onClick={() => onAdd(count)}> <i className="bi bi-cart2"></i> </button>
        </div>
    </div>
  )
}

export default ItemCount