# New Year Chaos

There are a number of people queued up, and each person wears a sticker indicating their _initial_ position in the queue. Initial positions increment by `1` from `1` at the front of the line to at the back.

Any person in the queue can bribe the person _directly in front_ of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe _at most two others_. For example, if `n = 8`and **Person 5** bribes **Person 4**, the queue will look like this: `1, 2, 3, 5, 4, 6, 7, 8`

Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print `Too chaotic` if the state is invalid, i.e. it requires a person to have bribed more than **2** people.

{% tabs %}
{% tab title="Inputs" %}
```javascript
newYears([2, 1, 5, 3, 4]);
newYears([1, 2, 5, 3, 7, 8, 6, 4]);
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function minimumBribes(arr: number[]) {
  const TOO_CHAOTIC = "Too Chaotic";
  let total = 0;
  for (let currentPos = 0; currentPos < arr.length; currentPos++) {
    // getting original position using - indexing (starts at 0)
    const originalPos = arr[currentPos] - 1;

    // diff = how far person has moved
    const diff = originalPos - currentPos;
    if (diff > 2) return console.log(TOO_CHAOTIC);
    console.log(currentPos, arr[currentPos], originalPos, diff);
    // We have a negative integer, because we're looking
    // behind us for if we have been bribed
    if (diff <= 0) {
      // check each person starting from one person ahead of originalPo
      // up until currentPos
      for (let j = Math.max(0, originalPos - 1); j < currentPos; j++) {
        const startOfForwardPerson = arr[j] - 1;
        // If a person in front of current person started BEHIND
        // current person, then current person MUST have been bribed by
        if (startOfForwardPerson > originalPos) {
          total++;
        }
      }
    }
  }
  return total;
}
```
{% endtab %}
{% endtabs %}

## Notes

* October 31, 2020
  * This one I had to look up again because it was kicking my ass. I first thought it was an iteration up to a certain maximum and we had to look up and down. But I realized that instead it'd be better if we just look down. 
  * This means that it'd be better suited for a different algorithm
  * Here's my initial submission:
  * ```javascript
    function newYears(arr: number[]) {
      let counter = 0;
      let chaos = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
          if (arr[i] === i + 2 || arr[i] === i + 3) {
            const temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            counter++;
          } else {
            chaos++;
          }
        }
      }
      return chaos > counter ? "Too Chaotic" : counter;
    }
    ```
  * This is okay, but the issues surrounding this was that I was swapping. And although that worked for the first test case it wasn't the solution. I shouldn't be swapping but rather just looking ahead and checking if correct.

