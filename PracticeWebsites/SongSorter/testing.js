let albums = [
  {
    albumName: "Reputation",
    albumLikes: 0,
    songs: [
      {
        name: "Ready for It",
        songLikes: 0,
        timesCalled: 4,
      },
      {
        name: "Dress",
        songLikes: 0,
        timesCalled: 4,
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
        timesCalled: 4,
      },
      {
        name: "Maroon",
        songLikes: 0,
        timesCalled: 4,
      },
    ],
  },
];

let enoughTimes = false;
const songsArray = ["Ready for It", "Dress", "Lavender Haze", "Maroon"];

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

  const isAllCalledEnough = (currentNum) => currentNum > songsArray.length - 1;
  timesCalledArray.every(isAllCalledEnough);
  return enoughTimes;
};

console.log(incrementTimesCalledCounter("Ready for It"));
console.log(albums[0].songs);
