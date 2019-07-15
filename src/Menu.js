import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import "./assets/css/main.css";
import './Menu.css';


function Menu({ name, desc, img, key, Origin_price, DC_price }) {
    return (

        <div className="Menu">

            <div className="Menu__Column">
                <MenuPoster img={img} alt={name} />
            </div>

            <div className="Menu__Column">
                <h1> {name} </h1>
                <OriginPrice Origin_price={Origin_price} /> &nbsp; &nbsp;<DCPrice DC_price={DC_price}  /> 
            <p>  </p>
                
                <div className="Menu__Synopsis">
           
                    <LinesEllipsis
                        text={desc}
                        maxLine='4'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MenuPoster({ img, alt }) {
    return (
        <img src={img} alt={alt} name={alt} className="Menu__Poster" />
    )
}



function MenuDesc({ desc }) {
    return (
        <span className="Menu__Desc">{desc}</span>
    )
}

function OriginPrice({ Origin_price }) {
    return (
        <span className="Origin__price"> {Origin_price} </span> 
    )
}

function DCPrice({ DC_price }) {
    return (
        <span className="DC__price">  {DC_price}</span>
    )
}

Menu.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,

}
MenuDesc.prototype = {
    desc: PropTypes.string.isRequired
}
OriginPrice.prototype = {
    Origin_Price: PropTypes.string.isRequired
}
DCPrice.prototype = {
    DC_Price: PropTypes.string.isRequired
}

MenuPoster.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Menu