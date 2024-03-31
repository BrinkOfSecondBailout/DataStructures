package credit;

import offer.GasOfferVisitor;
import offer.HotelOfferVisitor;
import offer.RestaurantOfferVisitor;

public class Runner {
    public static void main(String[] args) {
        Card bronze = new Bronze();
        Card silver = new Silver();
        Card gold = new Gold();

        HotelOfferVisitor hotel = new HotelOfferVisitor();
        GasOfferVisitor gas = new GasOfferVisitor();
        RestaurantOfferVisitor restaurant = new RestaurantOfferVisitor();

        gold.accept(restaurant);

    }
}
