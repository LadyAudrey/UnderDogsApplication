//////// Program to create a song Sorter website for TS :)
// //////// Button Logic Happiness
// const songA = document.getElementById("songA");
// const songB = document.getElementById("songB");
// const both = document.getElementById("both");
// const buttons = document.getElementsByClassName("buttons");

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
      },
    ],
  },
  {
    albumName: "Midnights",
    albumLikes: 0,
    songs: [
      {
        name: "Lavender Haze",
        songLikes: 0,
        timesCalled: 0,
      },
      {
        name: "Maroon",
        songLikes: 0,
        timesCalled: 0,
      },
    ],
  },
];

//cycling through albums to create an array of desired song names
const songsArray = [];
for (let album = 0; album < albums.length; album++) {
  for (let song = 0; song < albums[album].songs.length; song++) {
    songsArray.push(albums[album].songs[song].name);
  }
}
//cycling through the array to find the random songs generated
// increment timesCalled counter

// boolean value to tell if we have called each song enough time to start comparing likes
let enoughTimes = false;

const incrementTimesCalledCounter = function (songString) {
  let timesCalledArray = [];
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].songs.length; j++) {
      let incrementCalled = albums[i].songs[j].timesCalled;
      if (albums[i].songs[j].name == songString) {
        incrementCalled = albums[i].songs[j].timesCalled + 1;
        albums[i].songs[j].timesCalled = incrementCalled;
        timesCalledArray.push(incrementCalled);
      } else {
        timesCalledArray.push(incrementCalled);
      }
    }
  }
  console.log(timesCalledArray + "times called array");
  const isAllCalledEnough = (currentNum) => currentNum >= songsArray.length - 1;
  enoughTimes = timesCalledArray.every(isAllCalledEnough);
  return enoughTimes;
};

// console.log(incrementTimesCalledCounter);

let comparedSongsSet = new Set();

// Creating random math to randomly draw 2 songs from songArray
const randomSongGenerator = function () {
  let mathingA = Math.random();
  let randomSongA = Math.ceil(mathingA * songsArray.length - 1);
  let mathingB = Math.random();
  let randomSongB = Math.ceil(mathingB * songsArray.length - 1);
  let newSongArray = [songsArray[randomSongA], songsArray[randomSongB]];
  let newSongArrayReverse = [songsArray[randomSongB], songsArray[randomSongA]];
  while (
    randomSongA === randomSongB ||
    comparedSongsSet.has(newSongArray, newSongArrayReverse)
  ) {
    mathingA = Math.random();
    randomSongA = Math.ceil(mathingA * songsArray.length - 1);
    mathingB = Math.random();
    randomSongB = Math.ceil(mathingB * songsArray.length - 1);
    newSongArray = [songsArray[randomSongA], songsArray[randomSongB]];
    newSongArrayReverse = [songsArray[randomSongB], songsArray[randomSongA]];
  }
  comparedSongsSet.add(newSongArray, newSongArrayReverse);
  return newSongArray;
};

// console.log(randomSongGenerator());

// activated when addEventListener is activated on a button
// accepts the argument of a string == button textContent
// loops through album, finds the appropriate song and increments counters
// creates an array of how many times the songs have been called
const incrementLikesCounters = function (songString) {
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    for (let j = 0; j < album.songs.length; j++) {
      const song = album.songs[j].name;
      if (song === songString) {
        let incrementLikes = albums[i].songs[j].songLikes + 1;
        albums[i].songs[j].songLikes = incrementLikes;
        let incrementAlbums = albums[i].albumLikes + 1;
        albums[i].albumLikes = incrementAlbums;
      }
    }
  }
};

const debugSong = function (song) {
  return (
    "songName" +
    song.name +
    "songLikes" +
    song.songLikes +
    "timesCalled" +
    song.timesCalled
  );
};

let areWeDone = false;

// activated function within a button when all likes are different and timesCalled are > length of array
// hides buttons and creates a new div to display a table of the songs in order of likes
const showResults = () => {
  //hide buttons, and then create table and populate it with albums data
  const buttons = (document.getElementById("buttons").style.display = "none");
  const tableBody = document.getElementById("songData");
  const results = document.getElementById("results");
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    for (let j = 0; j < album.songs.length; j++) {
      const song = album.songs[j].name;
      console.log(song);
      results.textContent = song;
    }
  }
  // const songDataRow = userAlbumSongSelection.map((value) => {
  //   return (
  //     <tr>
  //       <td>{value.songName}</td>
  //       <td>{value.songLikes}</td>
  //     </tr>
  //   );
  // });
};

// logic for after each song has been called minimum times
// looping through songLikes, comparing,
//and if 2 are the same, put them in the buttons

const findSameLikes = function () {
  console.log("findSameLikes");
  const songsObjectArray = [];
  //create an array of the song names
  for (let album = 0; album < albums.length; album++) {
    for (let song = 0; song < albums[album].songs.length; song++) {
      songsObjectArray.push(albums[album].songs[song]);
    }
  }
  for (let i = 0; i < songsObjectArray.length; i++) {
    const firstSong = songsObjectArray[i];
    for (let j = 0; j < songsObjectArray.length; j++) {
      const secondSong = songsObjectArray[j];
      if (secondSong.name !== firstSong.name) {
        if (secondSong.songLikes === firstSong.songLikes) {
          let nextSongs = [secondSong.name, firstSong.name];
          return nextSongs;
        }
      }
    }
  }
  return (areWeDone = true);
};

// functions to listen fo click, increment counters and update text in the buttons

let debugInfoP = document.getElementById("debugInfo");

document.getElementById("songA").addEventListener("click", function () {
  if (areWeDone === true) {
    showResults();
  }
  const previousSongA = songA.textContent;
  incrementLikesCounters(previousSongA);
  if (enoughTimes === true) {
    console.log("enoughTimes is true");
    let nextSongs = findSameLikes();
    if ((nextSongs = "everything is different")) {
      console.log("show results!!");
      showResults();
    }
    songA.textContent = nextSongs[0];
    songB.textContent = nextSongs[1];
    incrementTimesCalledCounter(nextSongs[0]);
    incrementTimesCalledCounter(nextSongs[1]);
  }
  if (enoughTimes === false) {
    console.log("enoughTimes === false");
    const newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
    incrementTimesCalledCounter(newSongs[0]);
    incrementTimesCalledCounter(newSongs[1]);
  }
  // debugInfoP.textContent = JSON.stringify(albums, null, 2);
});

document.getElementById("songB").addEventListener("click", function () {
  let previousSongB = songB.textContent;
  incrementLikesCounters(previousSongB);
  if (enoughTimes) {
    console.log("enoughTimes is true");
    let nextSongs = findSameLikes();
    console.log(nextSongs);
    songA.textContent = nextSongs[0];
    songB.textContent = nextSongs[1];
    incrementTimesCalledCounter(nextSongs[0]);
    incrementTimesCalledCounter(nextSongs[1]);
  }
  let newSongs = randomSongGenerator();
  songA.textContent = newSongs[0];
  songB.textContent = newSongs[1];
  incrementTimesCalledCounter(newSongs[0]);
  incrementTimesCalledCounter(newSongs[1]);
  // debugInfoP.textContent = JSON.stringify(albums, null, 2);
});

document.getElementById("both").addEventListener("click", function () {
  let previousSongA = songA.textContent;
  incrementLikesCounters(previousSongA);
  let previousSongB = songB.textContent;
  incrementLikesCounters(previousSongB);
  if (enoughTimes) {
    console.log("enoughTimes is true");
    let nextSongs = findSameLikes();
    console.log(nextSongs);
    songA.textContent = nextSongs[0];
    songB.textContent = nextSongs[1];
    incrementTimesCalledCounter(nextSongs[0], nextSongs[1]);
  }
  let newSongs = randomSongGenerator();
  songA.textContent = newSongs[0];
  songB.textContent = newSongs[1];
  incrementTimesCalledCounter(newSongs[0]);
  incrementTimesCalledCounter(newSongs[1]);
  // debugInfoP.textContent = JSON.stringify(albums, null, 2);
});
