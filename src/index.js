import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

//3 callbacks can be added to DragDropContext: onDragStart, onDragUpdate, and onDragEnd. Only onDragEnd is required.
class App extends React.Component {
    state = initialData;

    onDragEnd = result => {
        console.log('ended drag');
        console.log(result);
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newSongIds = Array.from(column.songIds);
        newSongIds.splice(source.index, 1);
        newSongIds.splice(destination.index, 0, draggableId );

        const newColumn = { ...column, songIds: newSongIds };
        const newState = { ...this.state, columns: {
            ...this.state.columns, [newColumn.id]: newColumn
        }}

        this.setState(newState);
    }

    onDragStart = () => {
        console.log('started drag');
    }

    render() {
        return (
            <DragDropContext 
                onDragStart={this.onDragStart}
                
                onDragEnd={this.onDragEnd}
                >
                {this.state.columnOrder.map((columnId) => {
                    const column = this.state.columns[columnId];
                    const songs = column.songIds.map(songId => this.state.songs[songId]);
           
                    return <Column key={column.id} column={column} songs={songs} />
                })}
            </DragDropContext>
       ) 
    }

}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

