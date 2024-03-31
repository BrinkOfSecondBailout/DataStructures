package offer;

import credit.Bronze;
import credit.Silver;
import credit.Gold;

public class HotelOfferVisitor implements OfferVisitor{
    public void visitBronze(Bronze bronze) {
        System.out.println("Calculating cashback for Bronze card at hotels");
    }

    public void visitSilver(Silver silver) {
        System.out.println("Calculating cashback for Silver card at hotels");
    }

    public void visitGold(Gold gold) {
        System.out.println("Calculating cashback for Gold card at hotels");
    }
}
