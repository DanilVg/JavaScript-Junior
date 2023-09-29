const data = require('./data.json');

const task11Result = (animals) => {
  let catCount = 0;
  let dogCount = 0;
  let totalAge = 0;

  animals.forEach(animal => {
    if (animal.type === 'cat') {
      catCount++;
    } else if (animal.type === 'dog') {
      dogCount++;
    }
    totalAge += animal.age;
  });

  const avgAge = Math.floor(totalAge / animals.length);

  return {
    dogs: dogCount,
    cats: catCount,
    avgage: avgAge
  };
};

console.log(task11Result(data));

const task12Result = (animals) => {
  const blackPurebredDogs = animals.filter(animal => animal.type === 'dog' && animal.features.includes('black') && animal.breed);
  return blackPurebredDogs.length;
};

console.log(task12Result(data));

const task13Result = (animals) => {
  const filteredAnimals = animals.filter(animal => {
    if (animal.type === 'cat' && animal.features.includes('black')) {
      return true;
    } else if (animal.type === 'dog' && animal.features.includes('white')) {
      return true;
    }
    return false;
  });

  return filteredAnimals;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    const sortedCats = animals.filter(animal => animal.type === 'cat').sort((a, b) => b.age - a.age);
    const sortedDogs = animals.filter(animal => animal.type === 'dog').sort((a, b) => a.age - b.age);
    return [...sortedCats, ...sortedDogs];
  };
  
  console.log(task14Result(data));

const myPowFunc = (number, n) => {
  let result = number;

  for (let i = 1; i < n; i++) {
    result *= number;
  }

  return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
  const result = [];

  const flatten = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    });
  };

  flatten(inputArray);

  return result;
};

