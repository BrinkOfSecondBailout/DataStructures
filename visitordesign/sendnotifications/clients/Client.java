package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.NotificationVisitor;

public interface Client {
    public void showClientTier();

    void accept(NotificationVisitor v);
}
