import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid green;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background: #21242C;
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
                        {this.props.song.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}