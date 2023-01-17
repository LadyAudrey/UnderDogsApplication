//////// Program to create a song Sorter website for TS :)
//// Designed to be only run in a browser environment; not to be run in VSCcode!!!

const songArray = [];

// //////// Button Logic Happiness
// const songA = document.getElementById("songA");
// const songB = document.getElementById("songB");
// const both = document.getElementById("both");
// const buttons = document.getElementsByClassName("buttons")

let albums = [
   {
       albumName: "Reputation",
       albumLikes: 0,
       songs: [
           {
               name: "Ready for It",
               songLikes: 0,
               timesCalled: 0,
           },
           {
               name: "Dress",
               songLikes: 0,
               timesCalled: 0,
       }],
   },
   {
       albumName: "Midnights",
       albumLikes: 0,
       songs: [
           {
               name: "Lavendar Haze",
               songLikes: 0,
               timesCalled: 0,
           },
           {
               name: "Maroon",
               songLikes: 0,
               timesCalled: 0,
           }
       ]
   }
]

//cycling through albums to create an array of desired song names
for(let album = 0; album < albums.length; album++){
    for(let song = 0; song < albums[album].songs.length; song++) {
        songArray.push(albums[album].songs[song].name);
    }
}


// Creating random math to randomly draw 2 songs from songArray
const randomSongGenerator = function (){
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
    let newSongArray = [songArray[randomSongA], songArray[randomSongB]]
    return  newSongArray
}

const incrementsCounters = function(songString, songString){
    for (let i = 0; i < albums.length; i++) {
    let foundIt = false;
    const album = albums[i];
    for (let j = 0; j < album.songs.length; j++) {
        const song = album.songs[j].name;
        if(song === currentSong){
            let increment = albums[i].songs[j].songString + 1;
            albums[i].songs[j].songLikes = increment;
        }
    }
}
}


const comparedSongs = [];

//create a set of all the 

songA.onclick = function () {
    let previousSongA = songA.textContent;
    incrementsCounters(previousSongA, songLikes);
    let newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    incrementsCounters(newSongs[0], timesCalled);
    songB.textContent = newSongs[1];
    incrementsCounters(newSongs[1], timesCalled);
    comparedSongs.push([newSongs]);
}

songB.onclick = function () {
    let previousSongB = songB.textContent;
    incrementsCounters(previousSongB, );
    let newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
    comparedSongs.push([newSongs]);
}

both.onclick = function () {
    let previousSongA = songA.textContent;
    incrementsCounters(previousSongA);
    let previousSongB = songB.textContent;
    incrementsFavorite(previousSongB);
    let newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
    comparedSongs.push([newSongs]);
}

// function to listen fo click and update text in the button
// const button = document.buttons.addEventListener('click', () => {
//     let mathing = Math.random();
//     console.log("something is working")
//     let randomSong = Math.ceil(mathing * songArray.length - 1);
//     const text = document.createElement("songA");
//     this.textContent = songArray[randomSong];
//   });

// buttons.addEventListener("onclick", () => {
//         // Pull textContent to update song and album counters accordingly
//     console.log(element.textContent)
//     let button = element.id;
//     if (button === "songA") {
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//         // incriment songA likes variables and update buttons text
//     } else if (button === "songB")  {
//         // incriment songB likes variables and update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     } else if (button === "both") {
//         // incriment both likes variables and update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     } else {
//         //do not incriment but update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     }
// })


// explaining how to call and increment variables in Albums
// console.log(albums[0].albumName)
// console.log(albums[0].songs[0].name)
// //     // Pull textContent to update song and album counters accordingly
//     console.log(element.textContent)
//     let button = element.id;
//     if (button === "songA") {
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//         // incriment songA likes variables and update buttons text
//     } else if (button === "songB")  {
//         // incriment songB likes variables and update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     } else if (button === "both") {
//         // incriment both likes variables and update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     } else {
//         //do not incriment but update buttons text
//         songA.textContent = songArray[randomSongA];
//         songB.textContent = songArray[randomSongB];
//     }
// }


// at every shuffle, push to an array of songs, documenting songs that have been compared
// does this couple already exist in compared songs array? [["songA", "songB"]] 
// let comparedSongs =[];