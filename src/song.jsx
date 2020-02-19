import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background: #21242C;
`;

const Name = styled.h3`
    color: white;
`;

const Artist = styled.p`
    color: green;
`;
 

export default class Song extends React.Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.song.id}
                index={this.props.index}
            >
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Name>
                            {this.props.song.name}
                        </Name>
                        <Artist>
                            {this.props.song.artist}
                        </Artist>
                    </Container>
                )}
            </Draggable>
        )
    }
}