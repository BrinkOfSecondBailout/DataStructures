package credit;

import offer.OfferVisitor;

public interface Card {
    void printTier();

    void accept(OfferVisitor v);
}
