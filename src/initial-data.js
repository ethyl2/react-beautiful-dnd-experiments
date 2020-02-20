const initialData = {
    songs: {
        'song-1': { id: 'song-1', name: 'Chattanooga Choo Choo', artist: 'The Glen Miller Orchestra'},
        'song-2': { id: 'song-2', name: 'Mack the Knife', artist: 'Bobby Darin'},
        'song-3': { id: 'song-3', name: 'I\'ll Never Smile Again', artist: 'Tommy Dorsey and His Orchestra'},
        'song-4': { id: 'song-4', name: 'Stardust', artist: 'Nat King Cole'},
        'song-5': { id: 'song-5', name: 'Lover Man (Oh Where Can You Be)', artist: 'Billie Holiday'},
        'song-6': { id: 'song-6', name: 'Begin the Beguine', artist: 'Artie Shaw and His Orchestra'},
        'song-7': { id: 'song-7', name: 'In the Mood', artist: 'Glenn Miller'},
        'song-8': { id: 'song-8', name: 'Take the A Train', artist: 'Duke Ellington'},
        'song-9': { id: 'song-9', name: 'Sing Sing Sing', artist: 'Benny Goodman'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Playlist',
            songIds: []
        },
        'column-2': {
            id: 'column-2',
            title: 'Pending',
            songIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Request List',
            songIds: ['song-1', 'song-2', 'song-3', 'song-4', 'song-5', 'song-6', 'song-7', 'song-8', 'song-9']
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;