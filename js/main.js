d = console.dir
l = console.log

//returns the distance in kms between two points
//taken from https://www.geodatasource.com/developers/javascript
function distance(point1, point2) {
  let [lat1, lon1] = point1;
  let [lat2, lon2] = point2;
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }
}

function mobileCheck() {
  var check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};


const mapChapters = YAML.load('mapchapters.yml');

var map = L.Wrld.map('map-main', '492318f4e8e647bf1a86b1ec29813509', {
  center: [mapChapters[0].coords[0], mapChapters[0].coords[1]],
  zoom: mapChapters[0].mapZoom
});
// map.setCameraTiltDegrees(0);
// setTimeout(function () {
//   map.setCameraTiltDegrees(45);
// }, 4000);
// map.whenReady(function(){
//   l('read!')
// });


// map.precacheWithDetailedResult([mapChapters[0].coords[0], mapChapters[0].coords[1]], 5000, function (precacheResult) {
//   if (precacheResult.getSucceeded()) {
//     l('p 1 complete')
//     // map.precacheWithDetailedResult([mapChapters[3].coords[0], mapChapters[3].coords[1]], 5000, function (precacheResult) {
//     //   l('p 2 complete')
//     //   if (!precacheResult.getSucceeded()) console.error(precacheFailed)
//     // });
//   } else {
//     console.error("Precaching failed");
//   }
// });

const iconColors = ['red', 'orange-dark', 'orange', 'yellow', 'blue-dark', 'cyan', 'purple', 'violet', 'pink', 'green-dark', 'green', 'green-light', 'black'];
const iconShapes = ['circle', 'square', 'star', 'penta'];

let isMapBusy = false;
let scrollBox = document.getElementById('scroll-box');
for (let i = 0; i < mapChapters.length; i++) {
  scrollBox.innerHTML += '<div class="chapter"></div>';
}
let chapters = document.getElementsByClassName('chapter');
let currentChapter = 0;
let previousChapter = 0;
for (let i = 0; i < chapters.length; i++) {
  chapters[i].innerHTML = '<h1>' + mapChapters[i].title + '</h1>' +
    '<p>' + mapChapters[i].text + '</p>';
  if (mapChapters[i].image != false) {
    chapters[i].innerHTML += '<img src="img/' + mapChapters[i].image + '">';
  }
  // new Waypoint({
  //   element: chapters[i],
  //   handler: function () {
  //     if (currentChapter == i) return;
  //     if(mobileCheck()) {
  //       previousChapter = currentChapter;
  //       currentChapter = i;
  //     }
  //     moveMap(i);
  //   },
  //   //        offset: -1 * chapters[i].offsetHeight,
  //   context: document.getElementById('scroll-box')
  // });
  L.marker([mapChapters[i].coords[0], mapChapters[i].coords[1]], {
    title: mapChapters[i].title,
    icon: L.ExtraMarkers.icon({
      icon: mapChapters[i].icon,
      markerColor: iconColors[Math.floor(Math.random() * iconColors.length)],
      shape: iconShapes[Math.floor(Math.random() * iconShapes.length)],
      prefix: 'fa'
    })
  }).addTo(map);
};

function moveMap(i) {
  if (distance(mapChapters[previousChapter].coords, mapChapters[currentChapter].coords) > 30) {
    isMapBusy = true;
    map.setView(mapChapters[previousChapter].coords, 8, {
      headingDegrees: 0,
      animate: true,
      durationSeconds: 3.5
    });
    setTimeout(function () {
      map.setView(mapChapters[i].coords, 8, {
        headingDegrees: 0,
        animate: true,
        durationSeconds: 3.5
      });
    }, 3500);
    setTimeout(function () {
      map.setView(mapChapters[i].coords, mapChapters[i].zoom, {
        headingDegrees: 0,
        animate: true,
        durationSeconds: 3.5
      });
    }, 7000);
    setTimeout(function () {
      isMapBusy = false;
    }, 10600);
  }
  else {
    map.setView(mapChapters[i].coords, mapChapters[i].zoom, {
      headingDegrees: Math.random() * 360,
      animate: true,
      durationSeconds: mapChapters[i].animDur
    });
  }
  setTimeout(function () {
    isMapBusy = false;
  }, mapChapters[i].animDur * 1000 + 100);
}

// let currentHeading = 0;
// setInterval(function () {
//   if(isMapBusy) return;
//   if(currentHeading == 360) currentHeading = 0;
//   currentHeading += .25;
//   map.setCameraHeadingDegrees(currentHeading);
// }, 100);

let chapPosArr = [];
function checkChapterPositions() {
  chapPosArr = [];
  for (let i = 0; i < chapters.length; i++) {
    chapPosArr.push($(chapters[i]).offset().top - 10);
  }
}
checkChapterPositions();
$(window).resize(checkChapterPositions);

let isScrollBusy = false;
$('html body').on('wheel', function (e) {
  e.preventDefault();
  if (isScrollBusy) return;
  if (isMapBusy) return;
  isScrollBusy = true;
  if (e.originalEvent.deltaY < 0) handleScroll('up')
  else handleScroll('down')
});

let lastScrollTop = 0;
$('#scroll-box').on('scroll', function (e) {
  if (isScrollBusy) return;
  if (isMapBusy) return;
  isScrollBusy = true;
  var st = document.getElementById('scroll-box').scrollTop;
  if (st > lastScrollTop) handleScroll('down')
  else handleScroll('up')
});

function handleScroll(scrollDir) {
  if (scrollDir == 'up') {
    if (!$(chapters[currentChapter]).is(':first-child')) {
      previousChapter = currentChapter;
      currentChapter -= 1;
    }
  } else { //scrolled down
    if (!$(chapters[currentChapter]).is(':last-child')) {
      previousChapter = currentChapter;
      currentChapter += 1;
    }
  }
  $('#scroll-box').animate({ scrollTop: chapPosArr[currentChapter] });
  moveMap(currentChapter);
  setTimeout(function () {
    isScrollBusy = false;
  }, 1000)
}

$(document).ready(function () {
  $('#scroll-box').scrollTop(0);
  $('html body').scrollTop(0);
});