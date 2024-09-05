function findClosestIndex(array, targetValue) {
    var closestIndex = 0;
    var closestDifference = Math.abs(array[0] - targetValue);

    for (var i = 1; i < array.length; i++) {
        var currentDifference = Math.abs(array[i] - targetValue);

        if (currentDifference < closestDifference) {
            closestDifference = currentDifference;
            closestIndex = i;
        }
    }

    return closestIndex;
}