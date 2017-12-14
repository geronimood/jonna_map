var map;
var initialCenter;
var berlinCenter;
var largeInfoWindow;
var markers = [];

// Array with the initial locations.
var initialLocations = [
  {
    title: 'St. Joseph Krankenhaus',
    location: {lat: 52.478116, lng: 13.37389},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Tempelhofer Feld',
    location: {lat: 52.4742941, lng: 13.4146008},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Kienietzer 98 - Home Sweet Home',
    location: {lat: 52.4762807, lng: 13.425673},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Sonnenallee 72',
    location: {lat: 52.4839232, lng: 13.4329213},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Hasenheide',
    location: {lat: 52.482901, lng: 13.407235},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Kassel',
    location: {lat: 51.3344827, lng: 9.4973313},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Ulm',
    location: {lat: 48.409296, lng: 9.9546359},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Vogesen - Hautes Huttes',
    location: {lat: 48.0987658, lng: 7.10977},
    images: ['https://photos-3.dropbox.com/t/2/AAAYu26qz1ij-i1yIhtYCAUBAgy-v2a-2HgQyLUMiGx7Ag/12/45430114/jpeg/32x32/1/_/1/2/thumb_IMG_3650_1024.jpg/ELS15iIYww4gAigC/8w-pKTICoOnvijqz3kRudZ5SW51GSt8N8Kc-eC-jcKU?size=300x300&size_mode=3',
            'https://photos-5.dropbox.com/t/2/AACOeuaUoBFhBX5SwsnFIRfz70KNdczTGM7WRNJWY8PY5w/12/45430114/jpeg/32x32/1/_/1/2/thumb_IMG_3653_1024.jpg/ELS15iIYww4gAigC/xIM_HHO-SkpLimwmOZnHSz1cmRht0LQa2zClxdSXnyg?size=300x300&size_mode=3',
            'https://photos-3.dropbox.com/t/2/AADDNkyNpfvPlF5OTAryEkR7ZE2OWUrm4GuFqln17_N3dw/12/45430114/jpeg/32x32/1/_/1/2/thumb_IMG_3667_1024.jpg/ELS15iIYww4gAigC/9GQpw-TP7wM6RFh5klsRokeU2MTu8mXlnHwTCPjz5D0?size=300x300&size_mode=3',
            'https://photos-2.dropbox.com/t/2/AACHe7kPZBeSESzuGkFPqbaLqWETRUwMGOc8CxnHzUAB3g/12/45430114/jpeg/32x32/1/_/1/2/thumb_IMG_3674_1024.jpg/ELS15iIYww4gAigC/WBGhMcf6yLJKZkylu19tqIqoWoyjffHiLSJUXP-qPyw?size=300x300&size_mode=3'
    ]
  },
  {
    title: 'Atlantik - Carcans Plage',
    location: {lat: 45.0826302, lng: -1.1956478},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Buergeramt Tempelhof',
    location: {lat: 52.4621986, lng: 13.3856074},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Csabis Buero',
    location: {lat: 52.4994332, lng: 13.4319712},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Flughafen Schoenefeld',
    location: {lat: 52.3854444, lng: 13.5194261},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Fulda 6',
    location: {lat: 52.4829832, lng: 13.4328913},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Goerlitzer Park',
    location: {lat: 52.4965095, lng: 13.4355578},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Kreuz-Koelln',
    location: {lat: 52.4871557, lng: 13.4367517},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Prinzenbad',
    location: {lat: 52.497381, lng: 13.4023118},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
  {
    title: 'Schillerkiez',
    location: {lat: 52.477002, lng: 13.4209917},
    images: ['img/IMG_3943.jpg', 'img/IMG_4059.jpg', 'img/IMG_4297.jpg', 'img/IMG_4538.jpg']
  },
];

// Function initMap is called by the google API callback.
function initMap() {
  // Definitions of some styles for the map.
  var styles = [
    {
      featureType: 'water',
      stylers: [
        { color: '#19a0d8' }
      ]
    },{
      featureType: 'administrative',
      elementType: 'labels.text.stroke',
      stylers: [
        { color: '#ffffff' },
        { weight: 6 }
      ]
    },{
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#e85113' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        { color: '#efe9e4' },
        { lightness: -40 }
      ]
    },{
      featureType: 'transit.station',
      stylers: [
        { weight: 9 },
        { hue: '#e85113' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels.icon',
      stylers: [
        { visibility: 'off' }
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        { lightness: 100 }
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        { lightness: -100 }
      ]
    },{
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { color: '#f0e4d3' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#efe9e4' },
        { lightness: -25 }
      ]
    }
  ];

  // Constructor creates a new map.
  initialCenter = {lat: 48.0987658, lng: 7.10977};
  berlinCenter = {lat: 52.4742941, lng: 13.4146008};
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialCenter,
    zoom: 5,
    styles: styles,
    mapTypeControl: false
  });
  largeInfoWindow = new google.maps.InfoWindow();
  ko.applyBindings(new ViewModel());
};

// Location class
var Location = function(data) {
  var self = this;

  this.title = data.title;
  this.location = data.location;
  this.images = data.images;

  this.slideshow = createSlideshow(this.images);

  this.visible = ko.observable(true);

  var defaultIcon = makeMarkerIcon('0091ff');

  var highlightedIcon = makeMarkerIcon('FFFF24');

  // Creation of a new marker for each new Location.
  this.marker = new google.maps.Marker({
      position: this.location,
      title: this.title,
      icon: defaultIcon,
      animation: google.maps.Animation.DROP
  });

  // Event listener for click on marker -> runs populateInfoWindow function.
  this.marker.addListener('click', function() {
    populateInfoWindow(this, self.slideshow, largeInfoWindow);
  });

  // Event listener for mouseover on marker -> runs setIcon function.
  this.marker.addListener('mouseover', function() {
    this.setIcon(highlightedIcon);
  });

  // Event listener for mouseout on marker -> runs setIcon function.
  this.marker.addListener('mouseout', function() {
    this.setIcon(defaultIcon);
  });

  // function for showInfoWindow when marker is clicked.
  this.showInfoWindow = function() {
    google.maps.event.trigger(self.marker, 'click');
  };

  // function for highlightMarker when mouseover marker.
  this.highlightMarker = function() {
    google.maps.event.trigger(self.marker, 'mouseover');
  };

  // function for lowlightMarker when mouseout on marker.
  this.lowlightMarker = function() {
    google.maps.event.trigger(self.marker, 'mouseout');
  };
}

// The ViewModel.
var ViewModel = function() {
  var self = this;

  this.locationList = ko.observableArray([]); // Define an ko.observable array for the locationList...

  initialLocations.forEach(function(locationItem) { // ... and push each of the initialLocations with a new Location Class item to the array.
    self.locationList.push(new Location(locationItem));
  });

  this.filterInput = ko.observable('');

  // Function for the filter. Data-bind within the list class allows for display of filtered items only.
  this.filterList = ko.computed(function() {
    var filterItem = this.filterInput().toLowerCase();
    if (!filterItem) {
      this.locationList().forEach(function(locationItem) {
        locationItem.visible(true);
        locationItem.marker.setMap(map);
      });
      return this.locationList();
    } else {
        return ko.utils.arrayFilter(this.locationList(), function(locationItem) {
          var lowerCaseTitle = locationItem.title.toLowerCase();
          var result = (lowerCaseTitle.search(filterItem) >= 0);
          locationItem.visible(result);
          if (result) {
            locationItem.marker.setMap(map);
          } else {
            locationItem.marker.setMap(null);
          }
          return result;
        });
      }
    }, this);

    this.showAll = function() {
      map.setCenter(initialCenter);
    }

    this.showBerlin = function() {
      map.setCenter(berlinCenter);
      map.setZoom(12);
    }
};

// Function for changing the marker color.
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21,34),
    new google.maps.Point(0,0),
    new google.maps.Point(10,34),
    new google.maps.Size(21,34));
  return markerImage;
};

// Function for creating the image Slideshow

function createSlideshow(pictures) {
  var output = '<div class="slideshow">';
  var path = '';
  for (var i = 0; i < pictures.length; i++) {
    output += '<img class="mySlides" src="' + pictures[i]  + '">';
  }
  output += '<button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>';
  output += '<button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>';
  output += '</div>';
  return output;
}

// Functions for animating the Slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  //x[slideIndex-1].style.display = "block";

}

// Function for populating the InfoWindow with content.
function populateInfoWindow(marker, slideshow, infowindow) {
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div id="infowindow">' + '<h3>' + marker.title + '</h3>' + '<h4>Relevant Pictures</h4>' + slideshow);
    infowindow.addListener('closeclick', function() {
      infowindow.setMarker = null;
    });
    infowindow.open(map, marker);
    console.log(slideshow);
  }
};

// Function for displaying an error message if the Google Maps API cannot be accessed.
function googleError() {
  alert('There went something wrong when loading Google Maps - please try again!');
}
