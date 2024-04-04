package visitordesign.sendnotifications.notifications;

import visitordesign.sendnotifications.clients.Gold;
import visitordesign.sendnotifications.clients.Platinum;

public class TextVisitor implements ClientVisitor {
    public void sendNotifications(Gold gold) {
        System.out.println("Sending notifications to Gold members by Text!");
    }

    public void sendNotifications(Platinum platinum) {
        System.out.println("Sending notifications to Platinum members by Text!");
    }
}
