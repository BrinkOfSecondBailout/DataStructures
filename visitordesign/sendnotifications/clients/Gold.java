package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public class Gold implements Client {
    public void accept(ClientVisitor n) {
        n.sendNotificationsToGold(this);
    }
}
