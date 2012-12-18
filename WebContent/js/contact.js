$('#gmap').gmap({'zoom': 17, 'center': '42.669369,23.290049'}).bind('init', function(ev, map) {
	$('#gmap').gmap('addMarker', {'position': '42.669369,23.290049', 'bounds': false}).click(function() {
		$('#gmap').gmap('openInfoWindow', {'content': 'На Роси кабинета! (да не се бърка с Д-р Тянков - той е някъде нагоре из сградата)'}, this);
	});
});