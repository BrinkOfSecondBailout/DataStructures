package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public class Gold implements Client {
    public void showClientTier() {
        System.out.println("This is a Gold Member");
    }

    public void accept(ClientVisitor n) {
        n.sendNotifications(this);
    }
}
