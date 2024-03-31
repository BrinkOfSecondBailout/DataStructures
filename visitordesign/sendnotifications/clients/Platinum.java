package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.NotificationVisitor;

public class Platinum implements Client {
    public void showClientTier() {
        System.out.println("This is a Platinum Member");
    }

    public void accept(NotificationVisitor n) {
        n.sendNotifications(this);
    }
}
