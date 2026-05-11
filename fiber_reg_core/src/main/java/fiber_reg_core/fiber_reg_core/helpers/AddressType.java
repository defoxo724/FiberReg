package fiber_reg_core.fiber_reg_core.helpers;

public enum AddressType {
    REGISTERED("Registered address"),
    BILLING("Billing address"),
    MAILING("Mailing address"),
    SHIPPING("Shipping address");

    private final String displayName;

    AddressType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
