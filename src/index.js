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
        //console.log('ended drag');
        document.body.style.fontStyle = 'normal';
        document.body.style.background = 'inherit';
        //console.log(result);
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newSongIds = Array.from(column.songIds);
        // splice(source index, num elements to delete)
        newSongIds.splice(source.index, 1); //splice modifies the array (as well as returning a new array of what's been cut out)
        // splice(destination index this time, delete 0 elements, elementToAdd)
        newSongIds.splice(destination.index, 0, draggableId ); //opt 3rd parameter contains what you want to add

        const newColumn = { ...column, songIds: newSongIds };
        const newState = { ...this.state, columns: {
            ...this.state.columns, [newColumn.id]: newColumn
        }}

        this.setState(newState);
        // Here's where you could send changes to backend
    }

    onDragStart = () => {
        //console.log('started drag');
        document.body.style.fontStyle = 'italic';
        document.body.style.transition = 'background 0.2 ease';
    }

    onDragUpdate = update => {
        //console.log('in update');
        //console.log(update); 
        const { destination } = update;
        const opacity = destination ? destination.index / Object.keys(this.state.songs).length : 0;
        document.body.style.background = `rgba(128, 0, 128, ${opacity})`;
    }

    render() {
        return (
            <DragDropContext 
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
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

