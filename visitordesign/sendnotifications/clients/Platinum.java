package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public class Platinum implements Client {
    public void accept(ClientVisitor n) {
        n.sendNotificationsToPlatinum(this);
    }
}
