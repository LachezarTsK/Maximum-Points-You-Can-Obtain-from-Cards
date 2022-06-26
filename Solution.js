
/**
 * @param {number[]} cardPoints
 * @param {number} numberOfCardsToTake
 * @return {number}
 */
var maxScore = function (cardPoints, numberOfCardsToTake) {
    let totalCards = cardPoints.length;
    let pointsFrontSide = 0;
    let pointsBacktSide = 0;

    // alternatively: cardPoints.slice(0, numberOfCardsToTake).reduce((x, y) => x + y);
    for (let i = 0; i < numberOfCardsToTake; ++i) {
        pointsFrontSide += cardPoints[i];
    }
    let maxScore = pointsFrontSide;

    for (let i = 0; i < numberOfCardsToTake; ++i) {
        pointsFrontSide -= cardPoints[numberOfCardsToTake - i - 1];
        pointsBacktSide += cardPoints[totalCards - i - 1];
        maxScore = Math.max(maxScore, pointsFrontSide + pointsBacktSide);
    }
    return maxScore;
};
