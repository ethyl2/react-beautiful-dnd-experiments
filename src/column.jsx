import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Song from './song';

const Container = styled.div`
    background: black;
    margin: 8px;
    border: 1px solid magenta;
    border-radius: 2px;
    color: white;
    width: 50vw;
`;
const Title = styled.h3`
    padding: 8px;
    color: purple;
    font-size: 5em;
`;
const SongList = styled.div`
    padding: 8px
`;

export default class Column extends React.Component {
    render() {
        return(
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                    <SongList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.songs.map((song, index) => <Song key={song.id} song={song} index={index} />)}
                        {provided.placeholder}
                    </SongList>
                    )}
                </Droppable>
            </Container>
        )
    }
}