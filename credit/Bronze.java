package credit;

import offer.OfferVisitor;

public class Bronze implements Card {
    public void printTier() {
        System.out.println("This is a Bronze card!");
    }

    public void accept(OfferVisitor v) {
        v.visitBronze(this);
    }
}
