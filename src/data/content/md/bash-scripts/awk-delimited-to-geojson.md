AWK delimited-to-geojson
========================

> An AWK script that converts comma delimited text data to [GEOJSON format](http://geojson.org/).
> Currently supports generating both points for geo-locations and lines connecting geo-locations.
> NOTE: This is an extension of the filter-file script above.

[View code on GitHub](https://github.com/neilrussell6/bash-scripts/blob/master/delimited-to-geojson/delimited-to-geojson.awk)

Usage
-----

```bash
awk -v type='Point' -f delimited-to-geojson.awk cities-config.txt cities-data.txt > cities-output.json
awk -v type='LineString' -f delimited-to-geojson.awk city-connections-config.txt city-connections-data.txt > city-connections-output.json
```

Config explained
----------------

> The first row contains the values to filter by.
> The second row contains the column to capture in the result.

So the following config:

```
Johannesburg,London,Bangkok
longitude,latitude,city
```

> Translates to:
> Grab the following columns (latitude, longitude & city) from all rows with values that match any of these (Johannesburg, London or Bangkok)

Point Example
-------------

So given a data file with some geo data, and the following config:

```
Johannesburg,Bangkok,Chennai
longitude,latitude,full_name_nd,population
```

The following command:

```bash
awk -v type='Point' -f delimited-to-geojson.awk cities-config.txt cities-data.txt > cities-output.json
```

Will create a `cities-output.json` file with GEOJSON formatting, that looks something like this:

```
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [ 28.0436,-26.2023 ],
                "properties": { "full_name_nd": "Johannesburg", "population":"2026469" }
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [ 100.501,13.754 ],
                "properties": { "full_name_nd":"Bangkok","population":"5104476" }
            }
        },
        ...
    ]
}
```

LineString Example
------------------

Given the same data file containing some geo data, but now with this config:

```
Johannesburg,Bangkok,Chennai
from_full_name_nd,from_latitude,from_longitude,to_full_name_nd,to_latitude,to_longitude
```

The following command:

```bash
awk -v type='LineString' -f delimited-to-geojson.awk city-connections-config.txt city-connections-data.txt > city-connections-output.json
```

Will create a `city-connections-output.json` file with GEOJSON formatting, that looks something like this:

```
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [100.501, 13.754],
                    [88.363, 22.5626]
                ],
                "properties": {
                    "from_full_name_nd": "Bangkok",
                    "to_full_name_nd": "Kolkata"
                }
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [100.501, 13.754],
                    [80.2785, 13.0878]
                ],
                "properties": {
                    "from_full_name_nd": "Bangkok",
                    "to_full_name_nd": "Chennai"
                }
            }
        },
        ...
    ]
}
```
