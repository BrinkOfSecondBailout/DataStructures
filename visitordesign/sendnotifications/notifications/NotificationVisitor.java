package visitordesign.sendnotifications.notifications;

import visitordesign.sendnotifications.clients.Gold;
import visitordesign.sendnotifications.clients.Platinum;

public interface NotificationVisitor {
    void sendNotifications(Gold gold);
    void sendNotifications(Platinum platinum);
}
