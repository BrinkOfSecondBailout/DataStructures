package credit;

import offer.GasOfferVisitor;
import offer.HotelOfferVisitor;

public class Runner {
    public static void main(String[] args) {
        Card bronze = new Bronze();
        Card silver = new Silver();
        Card gold = new Gold();

        HotelOfferVisitor hotel = new HotelOfferVisitor();
        GasOfferVisitor gas = new GasOfferVisitor();

        bronze.accept(gas);
        silver.accept(hotel);

    }
}
