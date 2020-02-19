const initialData = {
    songs: {
        'song-1': { id: 'song-1', content: 'Chattanooga Choo Choo'},
        'song-2': { id: 'song-2', content: 'Mack the Knife'},
        'song-3': { id: 'song-3', content: 'I\'ll Never Smile Again'},
        'song-4': { id: 'song-4', content: 'Stardust'},
        'song-5': { id: 'song-5', content: 'Lover Man (Oh Where Can You Be)'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Playlist',
            songIds: ['song-1', 'song-2', 'song-3', 'song-4', 'song-5']
        }
    },
    columnOrder: ['column-1']
};

export default initialData;