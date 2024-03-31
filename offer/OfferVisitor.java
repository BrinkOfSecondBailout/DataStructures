package offer;

import credit.Bronze;
import credit.Silver;
import credit.Gold;

public interface OfferVisitor {
    void visitBronze(Bronze bronze);
    void visitSilver(Silver silver);
    void visitGold(Gold gold);
}
