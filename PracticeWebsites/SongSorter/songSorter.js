// Program to create a song Sorter website for TY :)

// has variables to increment, song names, links to spotify and youtube

const albums = [
   {
       name: "Reputation",
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
       name: "Midnights",
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

console.log(albums)

// at every shuffle, push to an array of songs, documenting songs that have been compared
// does this couple already exist in compared songs array? [["songA", "songB"]] 
// let comparedSongs =[];

// ////// Button Logic Happiness
// const el = document.querySelector("div.user-panel.main input[name='login']");
const songOptions = document.querySelector(".songOptions");
let firstSong = songOptions.querySelectorAll("button");
console.log(songOptions);
console.log(firstSong);
// songA.onclick = function () {
// }