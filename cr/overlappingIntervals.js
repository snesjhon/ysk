/**
 * OVERLAPPING INTERVALS
 * ---
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Input: [[1,4],[0,4]]
 * Output: [0,4]
 *
 * Input: [[1,4],[0,1]]
 * Output: [[0,4]]
 *
 * Input: [[1,4],[0,0]]
 * Output: [[0,0],[1,4]]
 * Resources
 * - https://www.educative.io/courses/coderust-hacking-the-coding-interview/lY7or
 * - https://leetcode.com/problems/merge-intervals/
 */

var merge = function(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }
  let window = [[intervals[0][0], intervals[0][1]]];
  for (let i = 1; i < intervals.length; i++) {
    let x1 = window[window.length - 1][0];
    let x2 = window[window.length - 1][1];
    let y1 = intervals[i][0];
    let y2 = intervals[i][1];

    if (x2 >= y1) {
    }

    // if (x2 >= y1) {
    // 	if(y2 > x2){
    // 		window[window.length - 1][1] = y2;
    // 	}
    //   if (y1 < x1) {
    //     window[window.length - 1][0] = y1;
    //   }
    // } else if (y2 > x1) {
    //   window.push([y1, y2]);
    // }
  }
  return window;
};

// merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18]
// ]); //?

// merge([
//   [1, 4],
//   [4, 5]
// ]); //?

merge([
  [1, 4],
  [0, 0]
]); //?
