/**
 * TIMEOUTS
 * ---
 * `setTimeout` adds the callback into the loop, in order that it was added. But you should also
 * take into account that there _can_ be some time between what you added and what you fired.
 *
 * Resource
 * - https://www.youtube.com/watch?v=USbiLiF9NDY&t=194s
 */

console.log("a");

const time1 = setTimeout(() => {
  console.log("b");
}, 1);

const time2 = setTimeout(() => {
  console.log("c");
}, 10);

const time3 = setTimeout(() => {
  console.log("d");
}, 0);

console.log("e");

/**
 * What would the output be?
 *
 * --
 *
 * Initially I thought it'd be `a,e,d,b,c` but that's wrong because I was thinking that because the
 * the setTimeout would take into account delay that it'd place the `d` before the `b`. However
 * because the time that it takes for the `a,e` to print out is theoretically a millisecond that it'd
 * might as well be the same time as 0. It's just that because in the eventloop the `b` was placed before
 * the `c` then it would fire first.
 *
 * --
 *
 * Answer: `a,e,b,d,c`
 */
