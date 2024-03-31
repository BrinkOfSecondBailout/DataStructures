package credit;

import offer.OfferVisitor;

public class Gold implements Card {
    public void printTier() {
        System.out.println("This is a Gold card!");
    }

    public void accept(OfferVisitor v) {
        v.visitGold(this);
    }
}
