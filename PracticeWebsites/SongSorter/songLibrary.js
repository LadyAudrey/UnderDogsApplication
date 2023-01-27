// a tree- an Array of Objects holdind albums
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
      },
    ],
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
      },
    ],
  },
];

const testingArray = [1, 4, 5, 8, 44, 2, 19, 3];
const testingSet = new Set(testingArray);

if (testingSet.has()) {
  console.log(true);
}
