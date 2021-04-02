function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.667704985837716, lng: 135.43046097035892},
        zoom: 18,
        mapId: 'ac468524494d7173'
      });

      //Name
          //Latitude, Longitude
          //Image URL
          //ScaledSize width, height
    const markers = [

		[
			"You Are Here",
			34.66767112713121,
			135.4297887322531,
			"images/pointer.svg",
			30,
			47.8
		],

		[
			"Yoshi\'s House",
			34.66830405539335, 
			135.43217527821884,
			"images/yoshi_house.svg",
			38,
			31
		],
		
		[
			"Star World",
			34.66745756069767, 
			135.43297904932916,
			"images/star.svg",
			38,
			38
		],

		[
			"Star World",
			34.66925534386902, 
			135.42827894868267,
			"images/star.svg",
			38,
			38
		],		

		[
			"Ghost House",
			34.66909161073133, 
			135.43041357753125,
			"images/ghosthouse.svg",
			40, 
			48
		],

		[
			"Ghost House",
			34.666268422588125, 
			135.4324644397979,
			"images/ghosthouse.svg",
			40, 
			48
		],		

		[
			"Castle",
			34.668117648307, 
			135.42853309491255,
			"images/castle.svg",
			40,
			53
		],

		[
			"Castle",
			34.66709074364325, 
			135.43516491475538,
			"images/castle.svg",
			40,
			53
		],		

		[
            "Warm pipe",
            34.666912068386544,
            135.43093929041092,
            "images/pipe.svg",
            38,
            31
        ],

		[
            "Warm pipe",
            34.66875148481038, 
			135.42959242837665,
            "images/pipe.svg",
            38,
            31
        ],

		[
            "Warm pipe",
            34.668699083299416, 
			135.4343856488099,
            "images/pipe.svg",
            38,
            31
        ],

		[
            "Warm pipe",
            34.665245172407474,
			135.43381858090666,
            "images/pipe.svg",
            38,
            31
        ],
		
		[
			"Donut Plains",
			34.666313191653565, 
			135.4296198618383,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.666324856648764,
			135.42977866799245,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.6662522985668,
			135.4297884700791,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.66883613334619, 
			135.43167047075445,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.6687595465794, 
			135.43151363736743,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.66693756681315, 
			135.42633813548412,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.66690531902305, 
			135.42647536469775,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.66570195069889, 
			135.43525177408156,
			"images/hill_with_eyes.svg",
			50,
			60.7
		],

		[
			"Donut Plains",
			34.66542935750539, 
			135.43568173203403,
			"images/hill_with_eyes.svg",
			50,
			60.7
		]

    ];

	for(let i = 0; i<markers.length; i++){
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng:currMarker[2]},
			map,
			title: currMarker[0],
			icon:{
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
			},
			animation: google.maps.Animation.DROP
		  });
	
		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		  });
	
		marker.addListener("click", () => {
			infowindow.open(map, marker);
		  });

	}

    
}

