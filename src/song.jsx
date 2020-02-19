import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
    justify-items: flex-start;
    align-items: center;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    transition: background 0.2s ease;
    background: ${props => (props.isDragging?  '#4D5056': '#21242C')};
   
`;

const Name = styled.h3`
    color: white;
`;

const Artist = styled.p`
    color: green;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background: turquoise;
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Song extends React.Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.song.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >   
                        <Handle />

                        <div>
                            <Name>
                                {this.props.song.name}
                            </Name>
                            <Artist>
                                {this.props.song.artist}
                            </Artist>
                        </div>

                        
                    </Container>
                )}
            </Draggable>
        )
    }
}