import React,{useState} from 'react';

function Hooks()
{
    const state=useState();
    const[count,setCount]=useState(0);
    function Titiksha()   
    {
        setCount(count+1);
    };

    return(
        <>
            <div className="text-center">
                <h1 className="display-1">{count}</h1>
                <button type="button" className="btn btn-success btn-lg" onClick={Titiksha}>Click here</button>
            </div>
            
        </>
        
    );
};
export default Hooks;




