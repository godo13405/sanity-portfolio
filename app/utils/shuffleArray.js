const shuffleArray = (array, limit = array.length) => {
return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, limit);
}

export default shuffleArray;