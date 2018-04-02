Array.prototype.swap = function (i, j) {
  [this[i], this[j]] = [this[j], this[i]]
}

module.exports.bubble = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (!raw) comps++
      if (cmp(array[j]) - cmp(array[j + 1]) > 0) {
        if (!raw) {
          steps.push([j, j + 1])
        }
        array.swap(j, j + 1)
      }
    }
  }

  return raw ? array : {
    array,
    steps,
    comps
  }
}

module.exports.insert = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && cmp(array[j]) - cmp(array[j - 1]) < 0; j--) {
      if (!raw) {
        steps.push([j, j - 1])
        comps++
      }
      array.swap(j, j - 1)
    }
  }

  return raw ? array : {
    array,
    steps,
    comps
  }
}

module.exports.select = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  for (let i = 0; i < array.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (!raw) comps++
      if (cmp(array[j]) < cmp(array[min])) min = j
    }
    if (i !== min) {
      if (!raw) steps.push([i, min])
      array.swap(i, min)
    }
  }

  return raw ? array : {
    array,
    steps,
    comps
  }
}

// module.exports.merge = function merge ({array, cmp, raw}) {
//   if (array.length === 1) {
//     return array
//   }

//   const middle = Math.floor(array.length / 2)
//   const left = array.slice(0, middle)
//   const right = array.slice(middle)

//   return mergeArrays(
//     merge({array: left, cmp, raw}),
//     merge({array: right, cmp, raw}),
//     cmp
//   )
// }

module.exports.merge = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  const mergeArrays = (left, right) => {
    let result = []
    let li = 0
    let ri = 0

    while (li < left.length && ri < right.length) {
      if (!raw) comps++
      if (cmp(left[li]) < cmp(right[ri])) {
        result.push(left[li])
        li++
      } else {
        result.push(right[ri])
        ri++
      }
      if (!raw) steps.push(0)
    }

    // if (!raw) {
    //   steps.push(...Array(left.length - li))
    //   steps.push(...Array(right.length - ri))
    // }

    return result.concat(left.slice(li)).concat(right.slice(ri))
  }

  const _merge = (array) => {
    if (array.length === 1) {
      return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return mergeArrays(
      _merge(left),
      _merge(right)
    )
  }

  let _array = _merge(array)

  return raw ? _array : {
    array: _array,
    steps,
    comps
  }
}

module.exports.shell = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  for (let h = parseInt(array.length / 2); h > 0; h = parseInt(h / 2)) {
    for (let i = h; i < array.length; i++) {
      let k = array[i]
      let j = i

      for (; j >= h && cmp(k) < cmp(array[j - h]); j -= h) {
        if (!raw) comps++
        array[j] = array[j - h]
      }

      if (!raw) steps.push([i, j])
      array[j] = k
    }
  }

  return raw ? array : {
    array,
    steps,
    comps
  }
}

module.exports.radix = ({array, cmp, raw}, base = 10) => {
  const listToBuckets = (a, i) => {
    let buckets = [...Array(base)].map(x => [])
    let d
    for (let s of array) {
      d = Math.floor(cmp(s) / (Math.pow(base, i))) % base
      buckets[d].push(s)
    }
    return buckets
  }

  const bucketsToList = (b) => {
    let ret = []
    for (let _b of b) {
      for (let v of _b) {
        ret.push(v)
      }
    }
    return ret
  }

  let max = Math.max(...array.map(cmp))

  for (let i = 0; Math.pow(base, i) <= max; i++) {
    array = bucketsToList(listToBuckets(array, i))
  }

  return array
}

module.exports.quick = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  const partition = (l, r) => {
    let p = cmp(array[Math.floor((l + r) / 2)])

    while (l <= r) {
      while (cmp(array[l]) < p) {
        if (!raw) comps++
        l++
      }
      while (cmp(array[r]) > p) {
        if (!raw) comps++
        r--
      }

      if (l <= r) {
        if (!raw) steps.push([l, r])
        array.swap(l, r)
        l++
        r--
      }
    }
    return l
  }

  const _quick = (l, r) => {
    if (l === r) return
    let index = partition(l, r)
    if (l < index - 1) _quick(l, index - 1)
    if (r > index) _quick(index, r)
  }

  _quick(0, array.length - 1)

  return raw ? array : {
    array,
    steps,
    comps
  }
}

module.exports.heap = ({array, cmp, raw}) => {
  let steps = []
  let comps = 0

  const sink = (arr, i, n) => {
    let left = i * 2
    if (left > n) return // if left child is out-of-bounds do nothing

    let right = left + 1
    if (!raw) comps++
    let max = (right > n ? left : (cmp(arr[left]) > cmp(arr[right]) ? left : right)) // get max child

    if (!raw) comps++
    if (cmp(arr[i]) >= cmp(arr[max])) return // if parent is greater than max child do nothing

    if (!raw) steps.push(i, max)
    arr.swap(i, max) // swap parent with max child element
    sink(arr, max, n) // continue sink with max child
  }

  const _heap = (arr) => {
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
      sink(arr, i, arr.length)
    }

    for (let i = arr.length - 1; i > 0; i--) {
      if (!raw) steps.push(0, i)
      arr.swap(0, i)
      sink(arr, 0, i - 1)
    }

    return arr
  }

  console.log(array)

  array = _heap(array)

  console.log(array)

  return raw ? array : {
    array,
    steps,
    comps
  }
}
