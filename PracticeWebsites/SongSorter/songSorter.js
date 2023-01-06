// Program to create a song Sorter website for TY :)
const songArray = ["Reputation", "Lavendar Haze", "Lover", "On a String"];

//////// Button Logic Happiness
const songA = document.getElementById("songA");
const songB = document.getElementById("songB");
const both = document.getElementById("both");
const neither = document.getElementById("neither");

// function to listn fo click and update text in the button
const newSongs = document.addEventListener('click', function () {
    let mathingA = Math.random();
    let randomSongA = Math.ceil(mathingA * songArray.length - 1);
    let mathingB = Math.random();
    let randomSongB = Math.ceil(mathingB * songArray.length - 1);
    songA.textContent = songArray[randomSongA];
    songB.textContent = songArray[randomSongB];
})

//songA.textContent = 'hello'

document.getElementById('songA').addEventListener('click', function() {
    let mathing = Math.random();
    let randomSong = Math.ceil(mathing * songArray.length - 1);
    const text = document.createElement("songA");
    this.textContent = songArray[randomSong];
  });
// const songB = document.getElementById("songB");
// console.log(songB)
// songB.onclick = function () {
//     const text = document.createElement("h3");
//     let randomSongB = "Midnights";
//     text.textContent = randomSongB;
//     document.body.appendChild(text);
// }

// has variables to increment, song names, links to spotify and youtube

const albums = [
   {
       albumName: "Reputation",
       likes: 0,
       songs: [
           {
               name: "Ready for It",
               likes: 0,
           },
           {
               name: "Dress",
               likes: 0,
       }],
   },
   {
       albumName: "Midnights",
       likes: 0,
       songs: [
           {
               name: "Lavendar Haze",
               likes: 0,
           },
           {
               name: "Maroon",
               likes: 0,
           }
       ]
   }
]

// console.log(albums[1].songs.)
// // Loop through all albums
// for(let i = 0; i < albums.length; i++) {
//   const album = albums[i];
//   console.log(album)
  // Loop through all songs in the album
//   for(let j = 0; j < album.songs.length; j++) {
//     const song = album.songs[j];
//     const songName = song.name;
//     songs.push(songName);
//   }
// }

// at every shuffle, push to an array of songs, documenting songs that have been compared
// does this couple already exist in compared songs array? [["songA", "songB"]] 
// let comparedSongs =[];