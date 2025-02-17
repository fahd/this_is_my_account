function twoSum(items, target): {
  var map = new Object
  items.each(item, index => {
    if (map.has(target - item)){
      return {map[item], index}
    }
    map[item] = index
  })
}
