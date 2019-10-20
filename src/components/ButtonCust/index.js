import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// Фйункциональный компонент
const ButtonCust = (props) => (

    <button
        onClick={props.onClick}
        className={props.style}
        id={props.id}

    >
        <Link
            to={props.link}
        >
        </Link>
        {props.btnName}
    </button>
);

export default ButtonCust;
