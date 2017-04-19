Search algorithms
=================

> This is a simple script that demonstrates the performance difference of a few different search algorithms when run on an ordered list.

[View code on GitHub](https://github.com/neilrussell6/python-scripts/blob/master/search-algorithms/orderded-search.py)

Usage
-----

```
python ordered-search.py [data size]
```

Results
-------

> This the output of this script when run on 100 million rows of data (in an array).

![python-script-search-algorithms](/assets/screenshots/python-script-search-algorithms.png)

> And these results show that:
> 1. A binary search significantly out performs a linear search.
> 2. A while loop slightly out performs a recursive function.

> NOTE: These differences become more significant as overhead and / or  data size increase.

Algorithms
----------

#### linear search (loop)

```python
def linearSearchLoop( data, search_value ):

    for i, n in enumerate(data):
        if (int(n) == search_value) : return i + 1

    return -1
```

#### binary search (loop)

```python
def binarySearchLoop( data, search_value ):

    # set min & max indices
    min_i = 0
    max_i = len(data)
    count = 0

    while (max_i >= min_i):

        count = count + 1
        guess_i = int((min_i + max_i) / 2) # set guess index to avg of remaining data

        # if guess matches search value
        if (data[ guess_i ] == search_value):
            return count # return iteration count

        # if guess was lower than search value
        elif (data[ guess_i ] < search_value):
            min_i = guess_i + 1 # half data for next iteration by increasing the min index

        # if guess was higher than search value
        else:
            max_i = guess_i - 1 # half data for next iteration by decreasing the max index

    return -1
```

#### binary search (recursive)

```python
def binarySearchRecursive( data, search_value, count = 1 ):
    "do a recursive binary search for given value and return the iteration point at which it suceeded"

    guess_i = int(len(data) / 2) # set guess index to halfway point in data

    # if data reduced to 1 and still not a match
    if (len(data) == 1 and data[ guess_i ] != search_value):
        return -1

    # if guess matches search value
    if (data[ guess_i ] == search_value):
        return count # return iteration count

    # if guess was lower than search value
    elif (data[ guess_i ] < search_value):
        return binarySearchRecursive( data[ guess_i: ], search_value, count + 1 ) # recurse with upper half of remaining data

    # if guess was higher than search value
    else:
        return binarySearchRecursive( data[ :guess_i ], search_value, count + 1 ) # recurse with lower half of remaining data
```
