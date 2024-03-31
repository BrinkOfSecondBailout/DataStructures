package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.EmailVisitor;
import visitordesign.sendnotifications.notifications.TextVisitor;

public class Runner {
    public static void main(String[] args) {
        Client shawn = new Gold();
        Client danny = new Platinum();

        // shawn.showClientTier();
        // danny.showClientTier();

        TextVisitor text = new TextVisitor();
        EmailVisitor email = new EmailVisitor();

        shawn.accept(email);
        danny.accept(text);
    }
}
