package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public interface Client {
    void accept(ClientVisitor v);
}
