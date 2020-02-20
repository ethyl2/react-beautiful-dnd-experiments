import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './initial-data';
import Column from './column';
import Header from './components/Header';
import AddSong from './components/AddSong';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

        const columnStart = this.state.columns[source.droppableId];
        const columnEnd = this.state.columns[destination.droppableId];

        if (columnStart === columnEnd) {
            const newSongIds = Array.from(columnStart.songIds);
            // splice(source index, num elements to delete)
            newSongIds.splice(source.index, 1); //splice modifies the array (as well as returning a new array of what's been cut out)
            // splice(destination index this time, delete 0 elements, elementToAdd)
            newSongIds.splice(destination.index, 0, draggableId ); //opt 3rd parameter contains what you want to add

            const newColumn = { ...columnStart, songIds: newSongIds };
            const newState = { ...this.state, columns: {
                ...this.state.columns, [newColumn.id]: newColumn
            }}

            this.setState(newState);
            return;
        }

        //Moving from one column to another column

        const startSongIds = Array.from(columnStart.songIds);
        startSongIds.splice(source.index, 1);
        const newColumnStart = {
            ...columnStart,
            songIds: startSongIds
        }

        const endSongIds = Array.from(columnEnd.songIds);
        endSongIds.splice(destination.index, 0, draggableId);
        const newColumnEnd = {
            ...columnEnd,
            songIds: endSongIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumnStart.id]: newColumnStart,
                [newColumnEnd.id]: newColumnEnd
            }
        }
        this.setState(newState);
        
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

    componentDidMount() {
        document.body.style.background = 'black';
    }

    componentDidUpdate() {
        document.body.style.background = 'black';
    }

    addSong = song => {
        //console.log(song);
        // Add song to song list
        const songIndex = Object.keys(this.state.songs).length + 1;
        const newSong = { id: `song-${songIndex}`,
            name: song.title,
            artist: song.artist
        }
        //console.log(newSong);
        const newSongs = {
            ...this.state.songs,
            [`song-${songIndex}`]: newSong
        }
        //console.log(newSongs);
        

        //Add song to pending list
        const newSongArray = [...this.state.columns['column-2']['songIds'], `song-${songIndex}`];
        //console.log(newSongArray); 

        const newPendingColumn = {...this.state.columns['column-2'], songIds: newSongArray};
        //console.log(newPendingColumn);

        const newColumns = {
            ...this.state.columns, ['column-2'] : newPendingColumn
            }
        //console.log(newColumns);

        const newState = {
            ...this.state,
            songs: newSongs,
            columns: newColumns
        }

        this.setState(newState);
        
    }

    render() {
        return (
            <div>
                <Header />
                <AddSong addSong={this.addSong}/>
                <DragDropContext 
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}
                    >
                    <Container>
                    {this.state.columnOrder.map((columnId) => {
                        const column = this.state.columns[columnId];
                        const songs = column.songIds.map(songId => this.state.songs[songId]);
            
                        return <Column key={column.id} column={column} songs={songs} />
                    })}
                    </Container>
                </DragDropContext>
            </div>
       ) 
    }

}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

