var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// console.log(songs);
// console.log(songs.join(','));
console.log(songs.join(','));
songs.push("Starman, by David Bowie", "Kenny G's Greatest Hits, by Kenny G")
songs.forEach(outputSongs);

// //TAKE JOIN OUTSIDE OF LOOP//THIS IS YOUR ISSUE

function outputSongs(song) {
    // songs.push("Starman, by David Bowie");
    // var updated_songs = song.join(',');
    songs = song.replace('>', '-').replace(/[@/\(/!/\*/]/g,'').split('-');

    document.getElementById("songbox").innerHTML += `<h1>${songs}</h1>`;
    console.log(songs);
}



