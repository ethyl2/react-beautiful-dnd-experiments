import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './column';

class App extends React.Component {
    state = initialData;

    render() {
       return this.state.columnOrder.map((columnId) => {
           const column = this.state.columns[columnId];
           const songs = column.songIds.map(songId => this.state.songs[songId]);
           //return column.title;
           return <Column key={column.id} column={column} songs={songs} />
       }) 
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

