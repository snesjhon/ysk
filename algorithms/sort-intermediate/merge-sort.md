# Merge Sort

Merge a list of items using merge sort, and describe the Time & Space complexity

{% tabs %}
{% tab title="JavaScript" %}
```javascript
mergeSort([5,4,3,2,1]) // [1,2,3,4,5]
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const arrL = mergeSort(arr.slice(0, mid));
    const arrR = mergeSort(arr.slice(mid));
    return merge(arrL, arrR);
}

function merge(arrL, arrR){
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arrL.length && j < arrR.length){
        if(arrL[i] < arrR[j]){
            results.push(arrL[i]);
            i++
        } else {
            results.push(arrR[i]);
            j++
        }
    }
    while(i < arrL.length){
        results.push(arrL[i]);
        i++
    }
    while(j < arrR.length){
        results.push(arrR[j]);
        j++
    }
    return results;
}
```

### Explanation

This is the start of our algorithm and the base case for the recursion. This assures us as we divide the array recursively we always return once we have a single item or less. So during our `slice` process, if we end up with 1 or NO items in the array then we return that and continue with merging. 

```text
if(arr.length <= 1) return arr;
```

In order to divide our array recursively we have to divide the array until we reach the base case. We do this by using `slice` by the mid point. We use `Math.floor` to give us a rounded down value. \(in case when we divide our array length we end up with a non indexable number\). 

```javascript
const mid = Math.floor(arr.length / 2);
const arrL = mergeSort(0, arr.slice(0, mid));
const arrR = mergeSort(arr.slice(mid);
```

Once we have the base case `[1] or []` then we can move on to the merging of our array.
{% endtab %}
{% endtabs %}

## Notes

* I found merge sort to be interesting in a lot of senses. Because I understood the concept but I didn't mentally understand the implementation. I get that you, divide and then _merge_ back in, but I had to give the concept more thought

