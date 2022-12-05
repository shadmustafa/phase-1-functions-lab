// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    let y = (x - 42)
    y = Math.abs(y);
    return y;
}

function distanceFromHqInFeet(y) {
    return (distanceFromHqInBlocks(y) * 264);
}
function distanceTravelledInFeet(s, d) {
    return Math.abs(d - s) * 264;
}
function calculatesFarePrice(start, destination) {
    let y = distanceTravelledInFeet(start, destination)
    if (y <= 400) {
        return 0;
    } else if (y >= 400 && y <= 2000) {
        return (y - 400) * 0.02
    }
    else if (y > 2000 && y <= 2500) {
        return 25;
    }
    else if (y > 2500) { return 'cannot travel that far'; }
}