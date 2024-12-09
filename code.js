
function merge(left, right) {
  let sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

async function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let [left,right] = await Promise.all([mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid))])
    return merge(left, right)
  }


async function main(){
    const arr = [12, 11, 13, 5, 6, 7];
    console.log("Given array is");
    console.log(arr);

    newArr = await mergeSort(arr);

    console.log("\nSorted array is");
    console.log(await newArr);
}

main()
