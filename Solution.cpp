
#include <vector>
using namespace std;

class Solution {
    
public:
    int maxScore(vector<int>& cardPoints, int numberOfCardsToTake) {
        int totalCards = cardPoints.size();
        int pointsFrontSide = 0;
        int pointsBacktSide = 0;

        // alternatively: accumulate(cardPoints.begin(), cardPoints.begin() + numberOfCardsToTake, 0);
        for (int i = 0; i < numberOfCardsToTake; ++i) {
            pointsFrontSide += cardPoints[i];
        }
        int maxScore = pointsFrontSide;

        for (int i = 0; i < numberOfCardsToTake; ++i) {
            pointsFrontSide -= cardPoints[numberOfCardsToTake - i - 1];
            pointsBacktSide += cardPoints[totalCards - i - 1];
            maxScore = max(maxScore, pointsFrontSide + pointsBacktSide);
        }
        return maxScore;
    }
};
