/*
Function adds last() to all arrays in which this
module is imported to. Last() will return the 
last value in the array. If the array is empty
it will return -1.

n.b. it's not really a good idea to actually use
this and this repo was created in jest.
*/
Array.prototype.last = function() {
    if (this.length > 0) {
        return this[this.length - 1]
    }
    return -1
}
