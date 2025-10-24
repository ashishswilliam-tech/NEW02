var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.443000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Perumkadavila_1 = new ol.format.GeoJSON();
var features_Perumkadavila_1 = format_Perumkadavila_1.readFeatures(json_Perumkadavila_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perumkadavila_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumkadavila_1.addFeatures(features_Perumkadavila_1);
var lyr_Perumkadavila_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumkadavila_1, 
                style: style_Perumkadavila_1,
                popuplayertitle: 'Perumkadavila',
                interactive: true,
                title: '<img src="styles/legend/Perumkadavila_1.png" /> Perumkadavila'
            });
var format_GEOLOGY_2 = new ol.format.GeoJSON();
var features_GEOLOGY_2 = format_GEOLOGY_2.readFeatures(json_GEOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_2.addFeatures(features_GEOLOGY_2);
var lyr_GEOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_2, 
                style: style_GEOLOGY_2,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_2_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_2_1.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_2_2.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_2_3.png" /> <br />' });
var format_DRAINAGE_3 = new ol.format.GeoJSON();
var features_DRAINAGE_3 = format_DRAINAGE_3.readFeatures(json_DRAINAGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_3.addFeatures(features_DRAINAGE_3);
var lyr_DRAINAGE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_3, 
                style: style_DRAINAGE_3,
                popuplayertitle: 'DRAINAGE',
                interactive: true,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_3_0.png" /> 0<br />\
    <img src="styles/legend/DRAINAGE_3_1.png" /> 1<br />\
    <img src="styles/legend/DRAINAGE_3_2.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_3_3.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_3_4.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_3_5.png" /> <br />' });
var format_ROAD_4 = new ol.format.GeoJSON();
var features_ROAD_4 = format_ROAD_4.readFeatures(json_ROAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_4.addFeatures(features_ROAD_4);
var lyr_ROAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_4, 
                style: style_ROAD_4,
                popuplayertitle: 'ROAD',
                interactive: true,
    title: 'ROAD<br />\
    <img src="styles/legend/ROAD_4_0.png" /> CART TRACK IN PLAINS<br />\
    <img src="styles/legend/ROAD_4_1.png" /> DISTRICT ROAD<br />\
    <img src="styles/legend/ROAD_4_2.png" /> FOOT PATH<br />\
    <img src="styles/legend/ROAD_4_3.png" /> PACK TRACK IN PLAINS<br />\
    <img src="styles/legend/ROAD_4_4.png" /> VILLAGE ROAD<br />\
    <img src="styles/legend/ROAD_4_5.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Perumkadavila_1.setVisible(true);lyr_GEOLOGY_2.setVisible(true);lyr_DRAINAGE_3.setVisible(true);lyr_ROAD_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Perumkadavila_1,lyr_GEOLOGY_2,lyr_DRAINAGE_3,lyr_ROAD_4];
lyr_Perumkadavila_1.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_GEOLOGY_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_DRAINAGE_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Perumkadavila_1.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_GEOLOGY_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_DRAINAGE_3.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_Perumkadavila_1.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_GEOLOGY_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'inline label - always visible', });
lyr_DRAINAGE_3.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_ROAD_4.set('fieldLabels', {'NAME': 'inline label - always visible', 'Length': 'no label', });
lyr_ROAD_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});