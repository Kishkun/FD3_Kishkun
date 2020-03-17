import React from 'react';

let Header = (props) => {
    return (
        <header>
            <h1 className='shop_title'>{props.title}</h1>
        </header>
    );
};

export default Header;
