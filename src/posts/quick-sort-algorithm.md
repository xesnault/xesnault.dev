---
title: Quick Sort algorithm
date: 2021-02-01
description: Description and implementation of the Quick Sort algorithm
---

# Quick Sort

To explain the Quick Sort algorithm, let's take a simple example:  
  
We have an array of number (integer) in random order, but we want them in ascending order, so we have to sort them, here comes the Quick Sort algorithm.  
  
*Note: The range of the numbers and the length of the array have no importance for the algorithm itself, but it will have a performance cost.*
  
## Algorithm

Select a number, called "pivot", chosen arbritrary from the array itself, put all the numbers lower than the pivot before it and all the numbers greater after it, split the current partition into 2 new partitions (the ones before and after the pivot), and repeat the procedure for each partition until there is no partition left (when the array length is 1).

The Quick Sort algorithm steps are:

- Select a pivot value from the partition and move it at the end of the partition (P, the pivot value).
- Remember the start index of the current partition (S, the start index).
- for each element (E), if E is lower or equal than P, then swap value E with the value at index S, then increment S.
- Use the pivot P to divide the partition into 2 new partitions.
- Repeat the algorithm for the 2 newly created partitions until there is no partition left.

## Implementation

#### Go

```go
func Swap(partition []int, i int, j int) {
    partition[i], partition[j] = partition[j], partition[i]
}

func QuickSort(partition []int) {
    Swap(partition, len(partition) / 2, len(partition) - 1) // Select the pivot from the middle (arbitrary) of the partition and swap it with the last element

    startIndex := 0
    pivot := partition[len(partition) - 1] // Since we already swapped the pivot, we get the value directly from the end of the partition

    for i := startIndex; i < len(partition); i++ {
        if partition[i] <= pivot {
            Swap(partition, i, startIndex)
            startIndex++
        }
    }

    // startIndex now point at the first element of the values greater or equal than the pivot
    if startIndex > 1 {
        QuickSort(partition[:startIndex - 1])
    }

    if len(partition) - startIndex > 1 {
        QuickSort(partition[startIndex:])
    }
}
```

## Performance (speed)

Average: O(n\*log(n))  
Best case: O(n\*log(n))  
Worst case: O(n²)

## Sources

https://fr.wikipedia.org/wiki/Tri_rapide (fr)  
https://en.wikipedia.org/wiki/Quicksort (en)  
My experience.