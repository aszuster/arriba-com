import { useState } from 'react';

const ToggleNav = ({pela}) => {
    const [show,setShow]= useState(false);
    return (
        <>
            <button className="ToggleNav fdf" onClick={pela}>
                <span></span><span></span><span></span>
            </button> 
        </>
    )}
    
export default ToggleNav;