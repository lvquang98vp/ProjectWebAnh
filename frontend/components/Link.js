// import Link from 'next/link';
import Router from 'next/router'
import React from 'react';
import styled, { css } from 'styled-components';


const A = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

function onClickHandler(href) {
    return e => {
        e.preventDefault()
        Router.push(href)
    }
};

const Link = ({ href, children }) => (
    <A href={href} onClick={onClickHandler(href)}>
        {children}
    </A>
);

export default Link;




