// Fetch songs from the backend and display them
async function fetchSongs() {
    try {
        const response = await fetch('http://localhost:3000/songs');
        const data = await response.json();

        if (data.message === "success") {
            const songList = document.getElementById('song-list');
            songList.innerHTML = data.data.map(song => `
                <div>
                    <h2>${song.title}</h2>
                    <p>Artist: ${song.artist || 'Unknown'}</p>
                    <audio controls>
                        <source src="${song.url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <hr>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

// Call the function to fetch and display songs when the page loads
fetchSongs();
