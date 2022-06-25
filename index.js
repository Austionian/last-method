/*
Function adds last() to all arrays in which this
module is imported to. Last() will return the 
last value in the array. If the array is empty
it will return -1.
*/
Array.prototype.last = function() {
    if (this.length > 0) {
        return this[this.length - 1]
    }
    return -1
}
