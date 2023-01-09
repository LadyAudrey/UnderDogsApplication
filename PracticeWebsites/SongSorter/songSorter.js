// Program to create a song Sorter website for TY :)
const songArray = [];

//////// Button Logic Happiness
// const songA = document.getElementById("songA");
// const songB = document.getElementById("songB");
// const both = document.getElementById("both");
// const neither = document.getElementById("neither");

let albums = [
   {
       albumName: "Reputation",
       albumLikes: 0,
       songs: [
           {
               name: "Ready for It",
               songLikes: 0,
           },
           {
               name: "Dress",
               songLikes: 0,
       }],
   },
   {
       albumName: "Midnights",
       albumLikes: 0,
       songs: [
           {
               name: "Lavendar Haze",
               songLikes: 0,
           },
           {
               name: "Maroon",
               songLikes: 0,
           }
       ]
   }
]

console.log(albums[0].songs[0].songLikes)

for(let album = 0; album < albums.length; album++){
    for(let song = 0; song < albums[album].songs.length; song++) {
        songArray.push(albums[album].songs[song].name);
    }
}

// function to listen fo click and update text in the button
function processClickChoice(element) {
    // Pull textContent to update song and album counters accordingly
    console.log(element.textContent)
    // Creating random math to randomly draw 2 songs from songArray
    let mathingA = Math.random();
    let randomSongA = Math.ceil(mathingA * songArray.length - 1);
    let mathingB = Math.random();
    let randomSongB = Math.ceil(mathingB * songArray.length - 1);
    while(randomSongA === randomSongB){
        mathingA = Math.random();
        randomSongA = Math.ceil(mathingA * songArray.length - 1);
        mathingB = Math.random();
        randomSongB = Math.ceil(mathingB * songArray.length - 1);
    }
    let button = element.id;
    if (button === "songA") {
        songA.textContent = songArray[randomSongA];
        songB.textContent = songArray[randomSongB];
        // incriment songA likes variables and update buttons text
    } else if (button === "songB")  {
        // incriment songB likes variables and update buttons text
        songA.textContent = songArray[randomSongA];
        songB.textContent = songArray[randomSongB];
    } else if (button === "both") {
        // incriment both likes variables and update buttons text
        songA.textContent = songArray[randomSongA];
        songB.textContent = songArray[randomSongB];
    } else {
        //do not incriment but update buttons text
        songA.textContent = songArray[randomSongA];
        songB.textContent = songArray[randomSongB];
    }
}

// explaining how to call and increment variables in Albums
// console.log(albums[0].albumName)
// console.log(albums[0].songs[0].name)
// albums[0].songs[0].likes += 1;
// console.log(albums[0].songs[0].likes)

// at every shuffle, push to an array of songs, documenting songs that have been compared
// does this couple already exist in compared songs array? [["songA", "songB"]] 
// let comparedSongs =[];