        var map = L.map('map').setView([0, 0], 1);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 1,
            maxZoom: 4,
            attribution: 'SL Map by /u/pauix',
            zomSnap: 0.25,
            tms: false,  
			noWrap: true,
            maxBounds:new L.LatLngBounds(new L.LatLng(86, -180), new L.LatLng(-86, 0)),
			maxBoundsViscosity: 1.0
        }).addTo(map);
        

		  
		/*This function gives you Lat Long of what you click on */
		/*
		function onMapClick(e) {
				var name = prompt("Name")
                var type = prompt("Type")
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: eval(type+"_"+4)}).bindPopup("txt");
				map.addLayer(mark)
              $("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+",\""+name+"\"],\n")
        
         //       circle = L.circle([e.latlng.lat, e.latlng.lng],(1), {color: "#ffcc00", fillColor:"#ffcc00",fillOpacity:0.75}).addTo(map)
		//		$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+"],\n")

		};
		map.on('click', onMapClick);
        */
        
		
		//Loop through the keep markers (declared on marker.js) array and add markers to layer
		var arrKeeps_4 = []
        var arrKeeps_3 = []
        var arrKeeps_2 = []
        
        var arrTowns_4 = []
        var arrTowns_3 = []
        var arrTowns_2 = []        

        var arrBurgs_4 = []
        var arrBurgs_3 = []
        var arrBurgs_2 = []
        
        var arrVillages_4 = []
        var arrVillages_3 = []
        var arrVillages_2 = []
        
        // KEEPS
        for (var i=0; i<keeps.length; i++) {
           
            var lat = keeps[i][0];
            var lon = keeps[i][1]; 
            var popupText = keeps[i][2];
            
            var marker_4 = new L.Marker([lat, lon], {icon: Keep_4, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
            var marker_3 = new L.Marker([lat, lon], {icon: Keep_3, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
            var marker_2 = new L.Marker([lat, lon], {icon: Keep_2, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
           
			arrKeeps_4.push(marker_4)
            arrKeeps_3.push(marker_3)
            arrKeeps_2.push(marker_2)
        }
		var keepLayer_4 = L.layerGroup(arrKeeps_4);
        var keepLayer_3 = L.layerGroup(arrKeeps_3);
        var keepLayer_2 = L.layerGroup(arrKeeps_2);
        
        // TOWNS
        for (var i=0; i<towns.length; i++) {
           
            var lat = towns[i][0];
            var lon = towns[i][1]; 
            var popupText = towns[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Town_4, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_3 = new L.Marker([lat, lon], {icon: Town_3, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_2 = new L.Marker([lat, lon], {icon: Town_2, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
            
			arrTowns_4.push(marker_4)
            arrTowns_3.push(marker_3)
            arrTowns_2.push(arrTowns_2)
        }
		var townLayer_4 = L.layerGroup(arrTowns_4);
        var townLayer_3 = L.layerGroup(arrTowns_3);
        var townLayer_2 = L.layerGroup(arrKeeps_2);


        // BURGS
        for (var i=0; i<burgs.length; i++) {
           
            var lat = burgs[i][0];
            var lon = burgs[i][1]; 
            var popupText = burgs[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Burg_4, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_3 = new L.Marker([lat, lon], {icon: Burg_3, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_2 = new L.Marker([lat, lon], {icon: Burg_2, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
            
			arrBurgs_4.push(marker_4)
            arrBurgs_3.push(marker_3)
            arrBurgs_2.push(marker_2)
        }
		var burgLayer_4 = L.layerGroup(arrBurgs_4);
        var burgLayer_3 = L.layerGroup(arrBurgs_3);
        var burgLayer_2 = L.layerGroup(arrBurgs_2);     


        // VILLAGES
        for (var i=0; i<villages.length; i++) {
           
            var lat = villages[i][0];
            var lon = villages[i][1]; 
            var popupText = villages[i][2];
            
             var marker_4 = new L.Marker([lat, lon], {icon: Village_4, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_3 = new L.Marker([lat, lon], {icon: Village_3, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
             var marker_2 = new L.Marker([lat, lon], {icon: Village_2, title:popupText}).bindPopup(popupText);//.on('click',function(e){$("#extras").html("<iframe style='width:100%;height:100%' src='https://itp.wikia.com/"+this._icon.title+"'></iframe>")});
            
			arrVillages_4.push(marker_4)
            arrVillages_3.push(marker_3)
            arrVillages_2.push(marker_2)
        }
		var villageLayer_4 = L.layerGroup(arrVillages_4);
        var villageLayer_3 = L.layerGroup(arrVillages_3);
        var villageLayer_2 = L.layerGroup(arrVillages_2);    
        

        
        
        map.on('zoomend',function(e,m){
            e.target.removeLayer(keepLayer_2);
            e.target.removeLayer(keepLayer_3);
            e.target.removeLayer(keepLayer_4);
        
            e.target.removeLayer(townLayer_2);
            e.target.removeLayer(townLayer_3);
            e.target.removeLayer(townLayer_4);
            
            e.target.removeLayer(burgLayer_2);
            e.target.removeLayer(burgLayer_3);
            e.target.removeLayer(burgLayer_4);
            
            e.target.removeLayer(villageLayer_2);
            e.target.removeLayer(villageLayer_3);
            e.target.removeLayer(villageLayer_4);
 
            switch(e.target._zoom){
                case 1:
                break;
                
                case 2:
                    e.target.addLayer(keepLayer_2);
                    e.target.addLayer(townLayer_2);
                    e.target.addLayer(burgLayer_2);
                    e.target.addLayer(villageLayer_2);
                break;
                
                case 3:
                    e.target.addLayer(keepLayer_3);
                    e.target.addLayer(townLayer_3);
                    e.target.addLayer(burgLayer_3);
                    e.target.addLayer(villageLayer_3);
                break;
                
                case 4:
                    e.target.addLayer(keepLayer_4);
                    e.target.addLayer(townLayer_4);
                    e.target.addLayer(burgLayer_4);
                    e.target.addLayer(villageLayer_4);
              break;
            }
            currentzoom = e.target._zoom;            
        })
        
var currentzoom = 1;