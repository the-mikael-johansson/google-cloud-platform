# Corona Source

Fetches COVID-19 ("Corona") confirmed, deaths and confirmed statistics from
<https://github.com/CSSEGISandData/COVID-19>'s CSV files, converts it to JSON,
stores it into Firestore (in Datastore mode) and presents it as a REST API.

[The awesome ArcGIS map](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) is also based on the data from above.

## Endpoints

GET {{baseUrl}}/corona-mirrorer/hopkins

## Requirements

Go to <https://console.cloud.google.com/datastore/welcome> and create a Firstore in Datastore mode database.

