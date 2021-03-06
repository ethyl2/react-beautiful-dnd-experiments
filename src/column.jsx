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
    display: flex;
    flex-direction: column;
    width: 30vw;
    @media (max-width: 500px) {
        width: 80vh;
    }
`;
const Title = styled.h3`
    padding: 8px;
    color: purple;
    font-size: 3em;
`;
const SongList = styled.div`
    padding: 8px;
    transition: background 0.2s ease;
    background: ${props => props.isDraggingOver ? 'purple': 'black'};
    flex-grow: 1;
    min-height: 100px;
`;

export default class Column extends React.Component {
    render() {
        return(
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                    <SongList
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
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