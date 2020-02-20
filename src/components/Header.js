import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    padding: 1rem;
    text-align: center;
    color: green;
`;

const Header = () => {
    return (
        <div>
            <Title>Big Band Playlist Creator</Title>
        </div>
    )
}

export default Header;