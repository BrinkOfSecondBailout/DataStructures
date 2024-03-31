package offer;

import credit.Bronze;
import credit.Gold;
import credit.Silver;

public class RestaurantOfferVisitor implements OfferVisitor {
    public void visitBronze(Bronze bronze) {
        System.out.println("Calculating cashback for Bronze card at restaurants");
    }

    public void visitSilver(Silver silver) {
        System.out.println("Calculating cashback for Silver card at restaurants");
    }

    public void visitGold(Gold gold) {
        System.out.println("Calculating cashback for Gold card at restaurants");
    }
}
