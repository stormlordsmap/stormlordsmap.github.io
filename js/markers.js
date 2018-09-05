  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
var Keep_4 = new L.icon({iconUrl: 'img/marker/keep.png',iconSize: [36, 36]})
var Keep_3 = new L.icon({iconUrl: 'img/marker/keep.png',iconSize: [18, 18]})
var Keep_2 = new L.icon({iconUrl: 'img/marker/keep.png',iconSize: [9, 9]})


// Define marker icons
var Village_4 = new L.icon({iconUrl: 'img/marker/village.png',iconSize: [36, 36]})
var Village_3 = new L.icon({iconUrl: 'img/marker/village.png',iconSize: [18, 18]})
var Village_2 = new L.icon({iconUrl: 'img/marker/village.png',iconSize: [9, 9]})

// Define marker icons
var Burg_4 = new L.icon({iconUrl: 'img/marker/burg.png',iconSize: [36, 36]})
var Burg_3 = new L.icon({iconUrl: 'img/marker/burg.png',iconSize: [18, 18]})
var Burg_2 = new L.icon({iconUrl: 'img/marker/burg.png',iconSize: [9, 9]})

// Define marker icons
var Town_4 = new L.icon({iconUrl: 'img/marker/town.png',iconSize: [36, 36]})
var Town_3 = new L.icon({iconUrl: 'img/marker/town.png',iconSize: [18, 18]})
var Town_2 = new L.icon({iconUrl: 'img/marker/town.png',iconSize: [9, 9]})

var keeps = [
[-69.09993967425088,-48.076171875,"Blackhaven + vilage"],
[-31.05293398570514,90.3515625,"Storm's End + village"],
[-63.35212928507874,-3.251953125,"Gallowsgrey + village"],
[-71.44117085172384,13.095703125,"Stonehelm +village"],
[-70.31873847853122,63.28125,"Honeyhollow"],
[-56.218923189166624,-19.599609375,"Broad Arch + village"],

]

var towns = [
[-24.926294766395582,98.349609375,"Durrandon Town"],
[-67.77602538907318,15.205078125,"Swann Town"],

]

var burgs = [
[-64.84893726357946,-37.880859375,"Dondarrion Burg"],

[-0.5273363048115043,84.111328125,"Durrandon Burg"],
[-33.9433599465788,67.939453125,"Durrandon Burg"],

]

var villages = [
[-64.84893726357946,-45.966796875,"Dondarrion Village"],
[-59.977005492196,-15.468749999999998,"Dondarrion Village"],
[-59.88893689676582,-23.642578125,"Dondarrion Village"],
[-61.73152565113397,-34.013671875,"Dondarrion Village"],
[-66.33750501996518,-15.644531250000002,"Dondarrion Village"],
[-69.06856318696032,-23.73046875,"Dondarrion Village"],
[-63.31268278043484,-23.5546875,"Dondarrion Village"],
[-66.37275500247455,-27.59765625,"Dondarrion Village"],


[-73.60299628304273,25.224609375,"Swann village"],
[-77.17668402976395,29.355468750000004,"Swann village"],
[-70.34831755984779,27.24609375,"Swann village"],
[-64.9607663214987,10.986328125,"Swann village"],
[-63.35212928507874,17.138671875,"Swann village"],
[-60.02095215374802,25.400390625,"Swann village"],
[-59.977005492196,17.138671875,"Swann village"],
[-58.17070248348609,7.03125,"Swann village"],
[-54.162433968067795,15.205078125,"Swann village"],

[-58.30948884067762,-5.2734375,"Trant village"],
[-67.80924450600008,-9.404296875,"Trant village"],
[-71.49703690095419,-7.294921874999999,"Trant village"],
[-72.58082870324515,-25.48828125,"Trant village"],

[10.055402736564236,102.3046875,"Durrandon Village"],
[-14.519780046326085,104.501953125,"Durrandon Village"],
[-4.127285323245357,98.4375,"Durrandon Village"],
[-17.895114303749143,90.087890625,"Durrandon Village"],
[-11.092165893501988,78.134765625,"Durrandon Village"],
[-27.839076094777802,76.025390625,"Durrandon Village"],
[-21.616579336740593,80.068359375,"Durrandon Village"],

[-76.55774293896555,71.015625,"Horpe Village"],
[-71.24435551310673,77.6953125,"Horpe Village"],
[-73.67726447634907,58.00781249999999,"Horpe Village"],
[-69.09993967425088,49.5703125,"Horpe Village"],
[-65.98227002980873,78.134765625,"Horpe Village"],

[-53.90433815627469,-29.970703124999996,"Staedmon Village"],
[-54.00776876193477,-9.404296875,"Staedmon Village"],
[-52.16045455774704,1.0546875,"Staedmon Village"],
[-57.938183012205315,-37.6171875,"Staedmon Village"],
[-60.02095215374802,-44.12109374999999,"Staedmon Village"],

]