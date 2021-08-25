import {useState} from 'react'
import './PlayerPicker.css'


export default function PlayerPicker(){
    const [qty, setQty] = useState(null)

    function handleClick(event) {
        setQty(event.target.innerText)
    }

    return (
        <div className='container'>
            <h1>Wizard Scored</h1>
            <h3>How many players?</h3>
            <div id="qty-player-container">
                <div className="qty-player-bt" onClick={handleClick}>3</div>
                <div className="qty-player-bt" onClick={handleClick}>4</div>
                <div className="qty-player-bt" onClick={handleClick}>5</div>
                <div className="qty-player-bt" onClick={handleClick}>6</div>
            </div>
            {qty}
        </div>
    )
}