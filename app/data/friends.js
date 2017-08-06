// https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/13-Week/13.3/16-HotRestaurant/app/data/tableData.js


var max = 6;
var min = 1;
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var friendData = [
  {
    name: "Uncle Donny",
    photo: "http://media.salon.com/2017/04/donald-trump346-620x412.jpg",
		scores: [
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max)
		],
		totalDiff: []
	},
	{
    name: "Hellacious Hill",
    photo: "http://mobile.wnd.com/files/2016/07/Hillary-TW4.jpg",
		scores: [
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max)
    ],
		totalDiff: []
	},
	{
    name: "Bubbly Barack",
    photo: "http://www.digitaljournal.com/img/5/9/2/8/1/2/i/2/2/6/o/buzz3.JPG",
		scores: [
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max)
    ],
		totalDiff: []
	},
	{
    name: "Schizo Sarah",
    photo: "https://img.wonkette.com/wp-content/uploads/2015/07/PalinTaxTheRich.jpg",
		scores: [
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max),
			getRandomArbitrary(min, max)
    ],
		totalDiff: []
  }
];

module.exports = friendData;