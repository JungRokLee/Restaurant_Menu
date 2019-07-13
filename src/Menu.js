import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

import './Menu.css';

function Menu({ name, desc, img, key, Origin_price, DC_price }) {
    return (

        <div className="Menu">

            <div className="Menu__Column">
                <MenuPoster img={img} alt={name} />
            </div>

            <div className="Menu__Column">
                <h1> {name} </h1>

                <div className="Menu__Price">
                    <MenuPrice Origin_price={Origin_price} DC_price={DC_price} />
                </div>

                <div className="Movie__Synopsis">
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

function MenuGenre({ desc }) {
    return (
        <span className="Menu__Genre">{desc}</span>
    )
}

function MenuDesc({ desc }) {
    return (
        <span className="Menu__Desc">{desc}</span>
    )
}

function MenuPrice({ Origin_price, DC_price }) {
    return (
        <span className="Menu__Price">{Origin_price} -> {DC_price}</span>
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
MenuPrice.prototype = {
    Origin_Price: PropTypes.string.isRequired,
    DC_Price: PropTypes.string.isRequired
}

MenuPoster.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MenuGenre.propTypes = {
    desc: PropTypes.string.isRequired
}

export default Menu