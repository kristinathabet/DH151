var map = L.map('map').setView([32.7767, -96.7970], 1);
mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
  }).addTo(map);

  $('#map').fadeIn(1000)

  let travel = L.icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/previews/000/440/946/original/vector-location-icon.jpg',
    iconSize: [30,30]
});

let data = [
	{
		'id': 0,
		'title':'Raleigh, North Carolina',
		'lat':  35.7796,
		'lon': -78.6382,
		'description': "The best place to thrift clothes! I've found many of my favorite jeans here."

	},
	{
		'id': 1,
		'title':'Brooklyn, New York',
		'lat': 40.6782,
		'lon': -73.9442,
		'description':"You can feel the culture in the air- from the music, to the food, to the people."
	},
	{
		'id': 2,
		'title':'Las Vegas, Nevada',
		'lat': 36.1699,
		'lon': -115.1398,
		'description':"The best place to let loose with friends and maybe come back rich if you're lucky!"
	{
		'id': 3,
		'title':'Manhattan, New York',
		'lat': 40.7831,
		'lon': -73.9712,
		'description':"The city that never sleeps! No really- everything closes at 4AM!"
	},
	{
		'id': 4,
		'title':'Los Angeles, California',
		'lat': 34.0522,
		'lon': -118.2437,
		'description':"Forever a place I will call home. I hope to raise my future kids here one day."
	},
]

// function to fly to a location by a given id number
function flyToIndex(index){
	map.flyTo([data[index].lat,data[index].lon],15)
    
	 // open the popup
	 myMarkers.getLayers()[index].openPopup()
	}

	let myMarkers = L.featureGroup();

	data.forEach(function(item){
		let marker = L.marker([item.lat,item.lon], {
			title: item.title,
			icon: travel 
		})
		
		.bindPopup(`<div><strong>${item.title}</strong><br><img class = 'center' style='height:200px;width:auto;horizontal-align:middle' src = ${item.picture}><br>${item.text}</div>`)
	
		myMarkers.addLayer(marker)
		
		$('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${item.id})">${item.title}</div>`)
	});

	myMarkers.addTo(map)

	let layers = {
		"Cities": myMarkers,
		}

		L.control.layers(null,layers).addTo(map)
	



