import React from "react";


const NotMaching = (props) => {
    let {x, y, z} = props;


    return (
        <>
            <div className='slot_inner'>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>this is not machining</h1>
                <hr />
            </div>
        </>
    )
}

export default NotMaching;