import { mergeSort } from '.'

describe('Test mergeSort', () => {
  it('Test function', () => {
    const collection_1 = [20, 3, 7]
    const collection_2 = [1, -5]
    const mergeArray = [...collection_1, ...collection_2].filter(
      (num) => num >= 0
    )
    const maxValue = Math.max(...mergeArray)
    const minValue = Math.min(...mergeArray)
    const result = mergeSort(collection_1, collection_2)
    expect(result.length).toBe(mergeArray.length)
    expect(result.at(0)).toBe(minValue)
    expect(result.at(-1)).toBe(maxValue)
  })
})
