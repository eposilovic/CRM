
    var root = am5.Root.new("chartdiv"); 
  

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "translateX",
    panY: "translateY",
    projection: am5map.geoNaturalEarth1()
  })
  
);

// Create polygon series
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  })
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true, 
  fill: am5.color(0xaaaaaa),
  templateField: "columnSettings"
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x30c4ec)
});




var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    include: ["ZA", "DZ", "PL", "SA", "PK", "MY", "TH", "RO", "CM", "BD", "GH", "GR", "OM", "ID", "JO", "SN", "TZ", "AE"], 
    fill: am5.color(0x30c4ec)
  })
);


// SECOND MAP

var root = am5.Root.new("chartdiv2"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "translateX",
    panY: "translateY",
    projection: am5map.geoNaturalEarth1()
  })
);

// Create polygon series
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  })
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true, 
  fill: am5.color(0xaaaaaa),
  templateField: "columnSettings"
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x30c4ec)
});




var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    include: ["ZA", "PK", "GH", "DZ", "KE", "SN", "TH", "SA", "EG", "CI", "QA", "PL", "PS", "CM", "AE", "SE", "BG"], 
    fill: am5.color(0x30c4ec)
  })
);

