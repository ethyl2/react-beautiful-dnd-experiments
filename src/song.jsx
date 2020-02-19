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


//If you wanted to create a drag handle, instead of the whole component being draggable
// <Handle {...provided.dragHandleProps} />
/*
const Handle = styled.div`
    width: 30px;
    height: 30px;
    background: turquoise;
    border-radius: 4px;
    margin-right: 12px;
`;
*/

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