function trimProperties(obj) {
  const result = {}
  for (let prop in obj) {
    result[prop] = obj[prop].trim()
  }
  return result
}

function trimPropertiesMutation(obj) {
  for (let prop in obj) {
    obj[prop] = obj[prop].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let result = integers[0].integer
  for (let i = 0; i < integers.length; i++) {
    if (integers[i].integer > result) {
      result = integers[i].integer
    }
  }
  return result
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber
  }

  countDown() {
    return this.count > 0 ? this.count-- : 0
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.currentSeason = 0
  }

  next() {
    const result = this.seasons[this.currentSeason]
    if (this.currentSeason === 3) {
      this.currentSeason = 0
    } else {
      ++this.currentSeason
    }
    return result
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0
    this.tank = tankSize
    this.name = name
    this.mpg = mpg
    this.tankSize = tankSize
  }

  drive(distance) {
    const milesCanDrive = this.tank * this.mpg
    if (distance <= milesCanDrive) {
      this.odometer = this.odometer + distance
      this.tank = this.tank - distance / this.mpg
    } else {
      this.odometer = this.odometer + milesCanDrive
      this.tank = 0
    }
    return this.odometer
  }

  refuel(gallons) {
    if (gallons <= this.tankSize - this.tank) {
      this.tank = this.tank + gallons
    } else {
      this.tank = this.tankSize
    }
    return this.tank * this.mpg
  }
}

async function isEvenNumberAsync(number) {
  return (await number) % 2 === 0 || false
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
