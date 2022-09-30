import React, { Fragment } from 'react'

const List1 = (props)=>{
    console.log(props)
    return(
        <Fragment>
            <h2>hola {props.persona} </h2>
        </Fragment>
    );
        
}

export default List1;