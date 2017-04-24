AWK script to filter file content
=================================

> A script that filters the content of a given file using a provided config.

[View code on GitHub](https://github.com/neilrussell6/bash-scripts/blob/master/awk-filter-file/filter-file.awk)

Usage
-----

```bash
awk -f filter-file.awk config.txt data.txt > output.csv
```

Config explained
----------------

The first row contains the values to filter by.

The second row contains the column to capture in the result.

So the following config:

```
Johannesburg,London,Bangkok
longitude,latitude,city
```

Translates to:

Grab the following columns (latitude, longitude & city) from all rows with values that match any of these (Johannesburg, London or Bangkok)

Example
-------

So given a data file with some geo data, and the following config:

```
Johannesburg,London,Bangkok
longitude,latitude,full_name
```

The command above will create an `output.csv` file with a row for each matching city (as specified in the config), with 3 columns (those specified in the config), so the result looks something like this:

```
28.0436,-26.2023,Johannesburg,2026469
-0.09184,51.5128,London,7556900
100.501,13.754,Bangkok,5104476
```
