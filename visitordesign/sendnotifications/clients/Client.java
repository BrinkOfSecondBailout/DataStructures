package visitordesign.sendnotifications.clients;

import visitordesign.sendnotifications.notifications.ClientVisitor;

public interface Client {
    public void showClientTier();

    void accept(ClientVisitor v);
}
