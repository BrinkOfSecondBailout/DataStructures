package offer;

import credit.Bronze;
import credit.Silver;
import credit.Gold;

public class GasOfferVisitor implements OfferVisitor {
    public void visitBronze(Bronze bronze) {
        System.out.println("Calculating cashback for Bronze card buying gas");
    }

    public void visitSilver(Silver silver) {
        System.out.println("Calculating cashback for Silver card buying gas");
    }

    public void visitGold(Gold gold) {
        System.out.println("Calculating cashback for Gold card buying gas");
    }
}
