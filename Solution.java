
class Solution {

    public int maxScore(int[] cardPoints, int numberOfCardsToTake) {
        int totalCards = cardPoints.length;
        int pointsFrontSide = 0;
        int pointsBacktSide = 0;

        // alternatively: Arrays.stream(cardPoints, 0,numberOfCardsToTake).sum();
        for (int i = 0; i < numberOfCardsToTake; ++i) {
            pointsFrontSide += cardPoints[i];
        }
        int maxScore = pointsFrontSide;

        for (int i = 0; i < numberOfCardsToTake; ++i) {
            pointsFrontSide -= cardPoints[numberOfCardsToTake - i - 1];
            pointsBacktSide += cardPoints[totalCards - i - 1];
            maxScore = Math.max(maxScore, pointsFrontSide + pointsBacktSide);
        }
        return maxScore;
    }
}
