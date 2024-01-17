export const mergeSort = (
  collection_1: number[],
  collection_2: number[]
): number[] => {
  const mergeArray = [...collection_1, ...collection_2].filter(
    (num) => num >= 0
  )
  var done = false
  while (!done) {
    done = true
    for (var i = 1; i < mergeArray.length; i += 1) {
      if (mergeArray[i - 1] > mergeArray[i]) {
        done = false
        var tmp = mergeArray[i - 1]
        mergeArray[i - 1] = mergeArray[i]
        mergeArray[i] = tmp
      }
    }
  }
  return mergeArray
}
