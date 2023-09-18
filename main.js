// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_india2019High;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(0).brighten(1),  
  min: chart.colors.getIndex(1).brighten(0.3),
  // logarithmic: true
 // "min": am4core.color("#ffd7b1"), 
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 1
  },
  {
    id: "IN-MH",
    value: 27
  },
  {
    id: "IN-UP",
    value: 9
  },
  {
    id: "US-AR",
    value: 12
  },
  {
    id: "IN-RJ",
    value: 8
  },
  {
    id: "IN-AP",
    value: 28
  },
  {
    id: "IN-MP",
    value: 23
  },
  {
    id: "IN-TN",
    value: 33
  },
  {
    id: "IN-JH",
    value: 20
  },
  {
    id: "IN-WB",
    value: 19
  },
  {
    id: "IN-GJ",
    value: 24
  },
  {
    id: "IN-BR",
    value:10
    
  },
  {
    id: "IN-TG",
    value: 36
  },
  {
    id: "IN-GA",
    value: 30
  },
  {
    id: "IN-DN",
    value: 26
  },
  {
    id: "IN-DL",
    value: 7
  },
  {
    id: "IN-DD",
    value: 25
  },
  {
    id: "IN-CH",
    value: 4
  },
  {
    id: "IN-CT",
    value: 22
  },
  {
    id: "IN-AS",
    value: 18
  },
  {
    id: "IN-AR",
    value: 37
  },
  {
    id: "IN-AN",
    value: 35
  },
  {
    id: "IN-KA",
    value: 29
  },
  {
    id: "IN-KL",
    value: 32
  },
  {
    id: "IN-OR",
    value: 21
  },
  {
    id: "IN-SK",
    value: 11
  },
  {
    id: "IN-HP",
    value:23
  },
  {
    id: "IN-PB",
    value: 3
  },
  {
    id: "IN-HR",
    value: 6
  },
  {
    id: "IN-UT",
    value: 5
  },
  {
    id: "IN-LK",
    value: 7
  },
  {
    id: "IN-MN",
    value: 14
  },
  {
    id: "IN-TR",
    value: 16
  },
  {
    id: "IN-MZ",
    value: 15
  },
  {
    id: "IN-NL",
    value: 13
  },
  {
    id: "IN-ML",
    value: 17
  }
];

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#ff7d01");








// login form container
