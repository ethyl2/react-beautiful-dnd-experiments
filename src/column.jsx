import React from 'react';
import styled from 'styled-components';
import Song from './song';

const Container = styled.div`
    background: black;
    margin: 8px;
    border: 1px solid magenta;
    border-radius: 2px;
    color: white;
`;
const Title = styled.h3`
    padding: 8px;
    color: purple;
`;
const SongList = styled.div`
    padding: 8px
`;

export default class Column extends React.Component {
    render() {
        return(
            <Container>
                <Title>{this.props.column.title}</Title>
                <SongList>
                    {this.props.songs.map(song => <Song key={song.id} song={song} />)}
                </SongList>
            </Container>
        )
    }
}