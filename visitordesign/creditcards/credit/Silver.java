package credit;

import offer.OfferVisitor;

public class Silver implements Card {
    public void printTier() {
        System.out.println("This is a Silver card!");
    }

    public void accept(OfferVisitor v) {
        v.visitSilver(this);
    }
}
