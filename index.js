// Define myEach function
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection; // Return the original collection
}

// Define myMap function
function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key]));
    }
  }
  return result;
}

// Define myReduce function
function myReduce(collection, callback, initialValue) {
  let accumulator =
    initialValue !== undefined
      ? initialValue
      : collection[Object.keys(collection)[0]];
  const startIndex = initialValue !== undefined ? 0 : 1;

  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i]);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], key, collection); // Pass key and collection to the callback function
    }
  }

  return accumulator;
}

// Define myFind function
function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
}

// Define myFilter function
function myFilter(collection, predicate) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result;
}

// Define mySize function
function mySize(collection) {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
}

// Define myFirst function
function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  } else {
    const keys = Object.keys(collection);
    return n === 1
      ? collection[keys[0]]
      : keys.slice(0, n).map((key) => collection[key]);
  }
}

// Define myLast function
function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  } else {
    const keys = Object.keys(collection);
    return n === 1
      ? collection[keys[keys.length - 1]]
      : keys.slice(-n).map((key) => collection[key]);
  }
}

// Define myKeys function
function myKeys(obj) {
  return Object.keys(obj);
}

// Define myValues function
function myValues(obj) {
  return Object.values(obj);
}
