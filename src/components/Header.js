import React from 'react';


function Header() {
    return(
        <div className = 'header-container'>
            <h1 className = 'header'>
                Conway's Game Of Life
            </h1>

            <img className = 'conway-image' src = 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/04/MarianaCook_JohnConway_1160Lede.jpg' />
        </div>
    )
}

export default Header;