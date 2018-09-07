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
/*[-70.31873847853122,63.28125,"Honeyhollow"],*/
[-56.218923189166624,-19.599609375,"Broad Arch + village"],
[-11.178401873711772,147.12890625,"Evenfall Hall"],
[13.324482645660462,-21.62057876586914,"Cafferen Keep  + Burg"], 
[-11.351806543249538,8.87746810913086,"Herston Keep + Village"], 
[-31.27943112056753,-27.50925064086914,"Peasebury Keep + Village"],  
[-74.51988881148509,-123.04687499999999,"Nightsong + Burg"],
[-58.17070248348609,149.58984375,"Rain house + Village"],

]

var towns = [
[-24.926294766395582,98.349609375,"Durrandon Town"],
[-67.77602538907318,15.205078125,"Swann Town"],

[-79.99716840285254,94.39453125,"Wrath's Town (capital)"],
  
[-14.689881366618762,149.150390625,"Tarth"],
[-56.36525013685607,102.65625,"Amberly + Village"],

]

var burgs = [
[-64.84893726357946,-37.880859375,"Dondarrion Burg"],

[-0.5273363048115043,84.111328125,"Durrandon Burg"],
[-33.9433599465788,67.939453125,"Durrandon Burg"],

[-77.157162522661,122.87109375,"Whitehead Burg"],

[-0.08789059053082422,149.501953125,"Evenren"],

[-78.664607712059,-133.41796874999997,"Caron Burg"],
[-72.52812972966163,-106.875,"Caron Burg"],
[-58.12431960569374,165.673828125,"Wylde Burg"],

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
/*
[-76.55774293896555,71.015625,"Horpe Village"],
[-71.24435551310673,77.6953125,"Horpe Village"],
[-73.67726447634907,58.00781249999999,"Horpe Village"],
[-69.09993967425088,49.5703125,"Horpe Village"],
[-65.98227002980873,78.134765625,"Horpe Village"],
*/
[-53.90433815627469,-29.970703124999996,"Staedmon Village"],
[-54.00776876193477,-9.404296875,"Staedmon Village"],
[-52.16045455774704,1.0546875,"Staedmon Village"],
[-57.938183012205315,-37.6171875,"Staedmon Village"],
[-60.02095215374802,-44.12109374999999,"Staedmon Village"],

[-77.157162522661,102.65625,"Whitehead Village"],
  
[6.751896464843375,141.328125,"Tarth village"], 
[13.410994034321702,149.4140625,"Tarth village"], 
[23.563987128451217,147.216796875,"Tarth village"], 
[17.22475820662464,159.697265625,"Tarth village"], 
[3.162455530237848,163.564453125,"Tarth village"],

[-18.48058591256319,21.35793685913086,"Herston Village"], 
[3.073666586295707,17.22707748413086,"Herston Village"], 
[-24.60800556563275,4.395046234130859,"Herston Village"], 
[-4.303618141972219,0.17629623413085938,"Herston Village"], 
[-15.200379985472686,-9.57956314086914,"Herston Village"], 
[-34.30799463462752,-12.30417251586914,"Peasebury Village"], 
[-42.55383901163426,-26.89401626586914,"Peasebury Village"], 
[-37.580228767905254,-36.82565689086914,"Peasebury Village"], 
[-25.404515348636195,-38.93503189086914,"Peasebury Village"], 
[-33.944214393620115,-50.80026626586914,"Peasebury Village"], 
[-4.3912558719074335,-23.46628189086914,"Cafferen Village"], 
[3.1614271299758485,-39.28659439086914,"Cafferen Village"], 
[29.915959503981913,-15.46823501586914,"Cafferen Village"],
  
[-75.51915125947707,-141.15234374999997,"Caron Village"],
[-71.46912418989676,-129.111328125,"Caron Village"],
[-77.93405519690262,-122.958984375,"Caron Village"],
[-76.28954161916205,-106.787109375,"Caron Village"],
[-70.22974449563026,-114.9609375,"Caron Village"],
[-67.74275906666388,-102.74414062499999,"Caron Village"],
[-73.6277887933994,-96.591796875,"Caron Village"],
[-78.61266542765814,-145.458984375,"Caron Village"],

[-54.059387886623576,153.369140625,"Wylde village"],
[-63.31268278043484,147.12890625,"Wylde Village"],
[-67.74275906666388,137.28515624999997,"Wylde village"],
[-59.80063426102868,135.263671875,"Wylde village"],

[-56.170022982932046,122.78320312499999,"Rogers Village"],
[-63.4308602126781,114.697265625,"Rogers Villlage"],
[-63.4308602126781,98.0859375,"Rogers village"],
[-56.218923189166624,90.087890625,"Rogers village"],

]



