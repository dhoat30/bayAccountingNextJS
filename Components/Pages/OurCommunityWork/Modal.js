import React from 'react'

function Modal({ clickedImg, handleRotationRight, setClickedImg, handleRotationLeft }) {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImg(null)
        }
    }
    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <img src={clickedImg} alt="this is an image">
                </img>
                <span className='dismiss' onClick={handleClick}>X</span>

            </div>
        </>
    )
}

export default Modal