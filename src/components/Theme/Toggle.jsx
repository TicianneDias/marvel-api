import React from 'react'
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
    position: absolute;
    top: 2rem;
    right: 4rem;
    transition: all 0.5s linear;
`;

export const Toggle = ({theme, toggleTheme}) => {
    console.log(theme);
    return (
        <div onClick={toggleTheme}>
            {theme === 'light' ? <Moon xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#212121"></Moon> : 'false'}
        </div>
    )
}