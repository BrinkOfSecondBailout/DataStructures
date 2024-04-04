package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public class Platinum implements Client {
    public void showClientTier() {
        System.out.println("This is a Platinum Member");
    }

    public void accept(ClientVisitor n) {
        n.sendNotifications(this);
    }
}
