// Program to create a song Sorter website for TY :)
window.onload = function () {
    // ////// Button Logic Happiness
    const songA = document.getElementById("songA");
    console.log(songA)
    songA.onclick = function () {
        const text = document.createElement("h2");
        let randomSongA = "Reputation";
        text.textContent = randomSongA;
        document.body.appendChild(text);
    }
}

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

// console.log(albums.songs.name)

// at every shuffle, push to an array of songs, documenting songs that have been compared
// does this couple already exist in compared songs array? [["songA", "songB"]] 
// let comparedSongs =[];

// // const el = document.querySelector("div.user-panel.main input[name='login']");
// const songOptions = document.querySelector(".songOptions");
// let firstSong = songOptions.querySelectorAll("button");
// console.log(songOptions);
// console.log(firstSong);
// // songA.onclick = function () {
// // }