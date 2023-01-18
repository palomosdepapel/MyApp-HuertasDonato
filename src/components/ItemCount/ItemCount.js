import './ItemCount.css';
import React,{useState} from 'react'

function ItemCount() {
    const [count, setCount] = useState(1);
    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }
  return (
    <div className='row counter align-content-center align-items-center px-3'>
        <div className="col-8 text-end px-0 pt-3">
            <button disabled={count <= 1} onClick={decrease} className='btn btn-light btn-sm'>-</button>
            <span className='text-count px-3'>{count}</span>
            <button onClick={increase} className='btn btn-light btn-sm'>+</button>
        </div>
        <div className="col-4 text-end pt-3">
             <button className="btn btn-primary"><i className="bi bi-cart2"></i></button>
        </div>
    </div>
  )
}

export default ItemCount