const index = require('../index')

test("Returns the last element of an array", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(arr.last()).toBe(5);
});

test("Returns -1 in an empty array", () => {
    const arr = []
    expect(arr.last()).toBe(-1)
})
