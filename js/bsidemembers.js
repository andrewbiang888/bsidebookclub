// MEMBER SECTION ON ABOUT US PAGE
var bsideMembers = [{
  fname: 'Adriana',
  lname: 'Hernandez',
  image: 'img/profileImg/Adriana%20-%20Soprano.JPG',
  voicepart: 'Soprano'
}, {
  fname: 'Sierra',
  lname: 'Bertolone-Smith',
  image: 'img/profileImg/Sierra%20-%20Soprano.jpg',
  voicepart: 'Soprano'
}, {
  fname: 'Alison',
  lname: 'Noe',
  image: 'img/profileImg/Alison%20-%20Soprano.jpg',
  voicepart: 'Soprano'
}, {
  fname: 'Siani',
  lname: 'Grace',
  image: 'img/profileImg/Siani%20-%20Alto.PNG',
  voicepart: 'Alto'
}, {
  fname: 'Becky',
  lname: 'Friedman',
  image: 'img/profileImg/nastyheadshot.jpeg',
  voicepart: 'Alto'
}, {
  fname: 'Kimo',
  lname: 'Camat',
  image: 'img/profileImg/Kimo%20-%20Tenor.jpg',
  voicepart: 'Tenor'
}, {
  fname: 'Trevor',
  lname: 'Sargent',
  image: 'img/profileImg/trevorImg.jpg',
  voicepart: 'Tenor'
}, {
  fname: 'Mason',
  lname: 'Wordell',
  image: 'img/profileImg/Mason%20-%20Bass.jpg',
  voicepart: 'Bass & Tenor'
}, {
  fname: 'Robert',
  lname: 'Pirtle',
  image: 'img/profileImg/pirtle.jpg',
  voicepart: 'Bass & Tenor'
}, {
  fname: 'Andy',
  lname: 'Erickson',
  image: 'img/profileImg/Andy%20-%20Bass.jpg',
  voicepart: 'Bass'
},]

var alumni = [
  'Sam Wellander',
  'Maia Erickson',
  'Louis Umbarger',
  'Kushi Beauchamp',
  'Charlie Best',
  'Amy Waters',
  'Ted Jack',
  'Cassie Beucherie',
  'Max Whitaker',
  'Emerald Kaitryn',
  'Kat Milan',
].sort()

var bsidevue = new Vue({
  el: '#bsidevue',
  data: {
    members: bsideMembers,
    alumni,
  }
});


// IMAGE GALLERY PAGE

function initGallery() {
	var el = document.querySelector(".m-p-g");
	var gallery = new MaterialPhotoGallery(el);
}

var url = 'images.json';
var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  //do stuff here
  var images = JSON.parse(req.responseText);
  var imageGallery = new Vue({
  el: '.m-p-g',
  data: {
    imageGallery: images
  },
  mounted: initGallery
});

}
req.open('GET', url);
req.send();
