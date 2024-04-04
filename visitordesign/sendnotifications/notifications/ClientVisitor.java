package visitordesign.sendnotifications.notifications;

import visitordesign.sendnotifications.clients.Gold;
import visitordesign.sendnotifications.clients.Platinum;

public interface ClientVisitor {
    void sendNotificationsToGold(Gold gold);
    void sendNotificationsToPlatinum(Platinum platinum);
}
