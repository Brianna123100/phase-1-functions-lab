function distanceFromHqInBlocks(blocks) {
    const hq = 42
    if (blocks > 42) {
        return blocks - hq
    }
    else {
        return hq - blocks
    }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, end) {
    if (end > start) {
        return (end - start) * 264
    }
    else {
        return (start - end) * 264
    }
}

function calculatesFarePrice(start, end) {
    let price = distanceTravelledInFeet(start, end)
    if (price <= 400) {
        return 0
    }
    else if (price >400 && price <= 2000) {
        return ((price - 400) * 0.02) 
    }
    else if (price > 2000 && price <= 2500) {
        return 25
    }
    else if (price > 2500) {
        return 'cannot travel that far'
    }
}