import React from 'react';

const home = (prop:{userName: string}) => {
    return(
        <h1>{prop.userName}</h1>
    )
}

export default home;