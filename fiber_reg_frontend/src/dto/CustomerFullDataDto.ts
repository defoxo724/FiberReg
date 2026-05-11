export interface CustomerFullDataDto{
    id: number;
    name: String;

    registeredAddressId: number|null;
    mailingAddressId: number|null;
    billingAddressId: number|null;
    shippingAddressId: number|null;
}