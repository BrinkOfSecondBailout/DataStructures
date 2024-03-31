package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.NotificationVisitor;

public class Gold implements Client {
    public void showClientTier() {
        System.out.println("This is a Gold Member");
    }

    public void accept(NotificationVisitor n) {
        n.sendNotifications(this);
    }
}
