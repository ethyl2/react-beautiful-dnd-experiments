import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid green;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
`;
 

export default class Song extends React.Component {
    render() {
        return <Container>
                {this.props.song.content}
            </Container>
    }
}