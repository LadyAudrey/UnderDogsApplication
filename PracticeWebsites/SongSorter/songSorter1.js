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
          songLikes: 4,
          timesCalled: 0,
        },
        {
          name: "Dress",
          songLikes: 4,
          timesCalled: 0,
        },
      ],
    },
    {
      albumName: "Midnights",
      albumLikes: 0,
      songs: [
        {
          name: "Lavendar Haze",
          songLikes: 4,
          timesCalled: 0,
        },
        {
          name: "Maroon",
          songLikes: 4,
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
  
  const comparedSongsSet = new Set();
  
  // Creating random math to randomly draw 2 songs from songArray
  const randomSongGenerator = function () {
    let mathingA = Math.random();
    let randomSongA = Math.ceil(mathingA * songsArray.length - 1);
    let mathingB = Math.random();
    let randomSongB = Math.ceil(mathingB * songsArray.length - 1);
    while (randomSongA === randomSongB) {
      mathingA = Math.random();
      randomSongA = Math.ceil(mathingA * songsArray.length - 1);
      mathingB = Math.random();
      randomSongB = Math.ceil(mathingB * songsArray.length - 1);
    }
    let newSongArray = [songsArray[randomSongA], songsArray[randomSongB]];
    comparedSongsSet.add([songsArray[randomSongA], songsArray[randomSongB]]);
    comparedSongsSet.add([songsArray[randomSongB], songsArray[randomSongA]]);
    return newSongArray;
  };
  
  // activated when addEventListener is activated on a button
  // accepts the argument of a string == button textContent
  // loops through album, finds the appropriate song and increments counters
  // creates an array of how many times the songs have been called
  const incrementsCounters = function (songString) {
    let timesCalledArray = [];
    for (let i = 0; i < albums.length; i++) {
      let foundIt = false;
      const album = albums[i];
      for (let j = 0; j < album.songs.length; j++) {
        let incrementCalled = albums[i].songs[j].timesCalled;
        const song = album.songs[j].name;
        if (song === songString) {
          let incrementLikes = albums[i].songs[j].songLikes + 1;
          albums[i].songs[j].songLikes = incrementLikes;
          incrementCalled = albums[i].songs[j].timesCalled + 1;
          albums[i].songs[j].timesCalled = incrementCalled;
          let incrementAlbums = albums[i].albumLikes + 1;
          albums[i].albumLikes = incrementAlbums;
        }
        timesCalledArray.push(incrementCalled);
      }
    }
    let enoughTimes = false;
    timesCalledArray.forEach((counter) => {
      if (counter > songsArray.length - 1) {
        enoughTimes = true;
      }
    });
    return enoughTimes;
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
  
  // logic for after each song has been called minimum times
  // looping through songLikes, comparing,
  //and if 2 are the same, put them in the buttons
  const findSameLikes = function () {
    console.log("findSameLogStart");
    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];
      console.log(album);
      for (let j = 0; j < album.songs.length; j++) {
        const firstSong = album.songs[j];
        console.log(debugSong(firstSong));
        for (let k = 0; k < albums.length; k++) {
          const album1 = albums[k];
          for (let l = 0; l < album.songs.length; l++) {
            const secondSong = album.songs[l];
            console.log(debugSong(secondSong));
            if (firstSong !== secondSong) {
              if (firstSong.songLikes === secondSong.songLikes) {
                let nextSongs = [secondSong.name, firstSong.name];
                console.log(nextSongs);
                return nextSongs;
              }
            }
          }
        }
      }
    }
  };
  
  // functions to listen fo click, increment counters and update text in the buttons
  
  document.getElementById("songA").addEventListener("click", function () {
    const previousSongA = songA.textContent;
    let songsMinimumCalled = incrementsCounters(previousSongA);
    if (songsMinimumCalled === true) {
      console.log(findSameLikes());
    }
    const newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
  });
  
  document.getElementById("songB").addEventListener("click", function () {
    let previousSongB = songB.textContent;
    incrementsCounters(previousSongB);
    let newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
  });
  
  document.getElementById("both").addEventListener("click", function () {
    let previousSongA = songA.textContent;
    incrementsCounters(previousSongA);
    let previousSongB = songB.textContent;
    incrementsCounters(previousSongA);
    let newSongs = randomSongGenerator();
    songA.textContent = newSongs[0];
    songB.textContent = newSongs[1];
  });
  


  const showResults = () => {
    //hide buttons, and then create table and populate it with albums data
    const buttons = (document.getElementById("buttons").style.display = "none");
    const tableBody = document.getElementById("songData");
    const results = document.getElementById("results");
    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];
      for (let j = 0; j < album.songs.length; j++) {
        const song = album.songs[j];
        console.log(song);
        results.textContent =
        <tr>
          <td>{song.name}</td>
          <td>{song.songLikes}</td>
        </tr>
    }
  };