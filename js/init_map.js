        var map = L.map('map').setView([0, 0], 1);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 1,
            maxZoom: 4,
            attribution: 'ITP Map by /u/pauix',
            zomSnap: 0.25,
            tms: false,  
			noWrap: true,
            maxBounds:new L.LatLngBounds(new L.LatLng(86, -180), new L.LatLng(-86, 0)),
			maxBoundsViscosity: 1.0
        }).addTo(map);
        

		  
		/*This function gives you Lat Long of what you click on */
		
		function onMapClick(e) {
	//		if(confirm("ADD MARKER HERE?")){
				var name = prompt("Name")
                var type = prompt("Type")
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: eval("Reach"+type+"_"+4)}).bindPopup("txt");
				map.addLayer(mark)
              $("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+",\""+name+"\",\""+type+"_4\",\""+type+"_3\",\""+type+"_2\"],\n")
        
         //       circle = L.circle([e.latlng.lat, e.latlng.lng],(1), {color: "#ffcc00", fillColor:"#ffcc00",fillOpacity:0.75}).addTo(map)
		//		$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+"],\n")
	
	//		}

		};
		map.on('click', onMapClick);
        
        
        
        var keeps = [];
        $.merge(keeps,reachKeeps);
       //keeps.concat(reachKeeps);
        
        var villages = []
        $.merge(villages,reachVillages);
        
        var resources = []
        $.merge(resources,reachResources);
		

		
		//Loop through the keep markers (declared on marker.js) array and add markers to layer
		var arrKeeps_4 = []
        var arrKeeps_3 = []
        var arrKeeps_2 = []
        
		//Loop through the village markers (declared on marker.js) array and add markers to layer
		var arrVillages_4 = []
        var arrVillages_3 = []
        var arrVillages_2 = []        

		//Loop through the resource markers (declared on marker.js) array and add markers to layer
		var arrResources_4 = []
        var arrResources_3 = []
        var arrResources_2 = []        

        for (var i=0; i<keeps.length; i++) {
           
            var lat = keeps[i][0];
            var lon = keeps[i][1]; 
            var popupText = keeps[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: keeps[i][3], title:popupText});//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_3 = new L.Marker([lat, lon], {icon: keeps[i][4], title:popupText});//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_2 = new L.Marker([lat, lon], {icon: keeps[i][5], title:popupText});//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             
			arrKeeps_4.push(marker_4)
            arrKeeps_3.push(marker_3)
            arrKeeps_2.push(marker_2)
        }
		var keepLayer_4 = L.layerGroup(arrKeeps_4);
        var keepLayer_3 = L.layerGroup(arrKeeps_3);
        var keepLayer_2 = L.layerGroup(arrKeeps_2);

        
       for (var i=0; i<villages.length; i++) {
           
            var lat = villages[i][0];
            var lon = villages[i][1]; 
            var popupText = villages[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: villages[i][3]}).bindPopup(popupText);
             var marker_3 = new L.Marker([lat, lon], {icon: villages[i][4]}).bindPopup(popupText);
             var marker_2 = new L.Marker([lat, lon], {icon: villages[i][5]}).bindPopup(popupText);
             
			arrVillages_4.push(marker_4)
            arrVillages_3.push(marker_3)
            arrVillages_2.push(marker_2)
        }
		var villageLayer_4 = L.layerGroup(arrVillages_4);
        var villageLayer_3 = L.layerGroup(arrVillages_3);
        var villageLayer_2 = L.layerGroup(arrVillages_2);
        
        
        
       for (var i=0; i<resources.length; i++) {
           
            var lat = resources[i][0];
            var lon = resources[i][1]; 
            var popupText = resources[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: resources[i][3]}).bindPopup(popupText);
             var marker_3 = new L.Marker([lat, lon], {icon: resources[i][4]}).bindPopup(popupText);
             var marker_2 = new L.Marker([lat, lon], {icon: resources[i][5]}).bindPopup(popupText);
             
			arrResources_4.push(marker_4)
            arrResources_3.push(marker_3)
            arrResources_2.push(marker_2)
        }
		var resourceLayer_4 = L.layerGroup(arrResources_4);
        var resourceLayer_3 = L.layerGroup(arrResources_3);
        var resourceLayer_2 = L.layerGroup(arrResources_2);
        
        
        
        map.on('zoomend',function(e,m){
            e.target.removeLayer(keepLayer_2);
            e.target.removeLayer(keepLayer_3);
            e.target.removeLayer(keepLayer_4);
            
            e.target.removeLayer(villageLayer_2);
            e.target.removeLayer(villageLayer_3);
            e.target.removeLayer(villageLayer_4);
            
            e.target.removeLayer(resourceLayer_2);
            e.target.removeLayer(resourceLayer_3);
            e.target.removeLayer(resourceLayer_4);            

            switch(e.target._zoom){
                case 1:
                break;
                
                case 2:
                    if(showKeeps) e.target.addLayer(keepLayer_2);
                    if(showVillages) e.target.addLayer(villageLayer_2);
                    if(showResources) e.target.addLayer(resourceLayer_2);
                break;
                
                case 3:
                    if(showKeeps) e.target.addLayer(keepLayer_3);
                    if(showVillages) e.target.addLayer(villageLayer_3);
                    if(showResources) e.target.addLayer(resourceLayer_3);
                break;
                
                case 4:
                    if(showKeeps) e.target.addLayer(keepLayer_4);
                    if(showVillages) e.target.addLayer(villageLayer_4);
                    if(showResources) e.target.addLayer(resourceLayer_4);
              break;
            }
            currentzoom = e.target._zoom;
            
        })
        
var currentzoom = 1;
 function toggle(type){
      switch(type){
          case "keep":
            showKeeps = !showKeeps;
         break;

         case "village":
            showVillages = !showVillages;
         break;

        case "resource":
            showResources = !showResources;
         break;
      }
      layer = eval(type+"Layer_"+currentzoom);

    if (map.hasLayer(layer) && currentzoom>1)     map.removeLayer(layer);
    else   map.addLayer(layer);
}