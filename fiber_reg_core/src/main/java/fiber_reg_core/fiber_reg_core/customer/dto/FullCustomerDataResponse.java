package fiber_reg_core.fiber_reg_core.customer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FullCustomerDataResponse {
    private Long id;
    private String name;

    /* Long because it can be nullable */
    private Long registeredAddressId;
    private Long mailingAddressId;
    private Long billingAddressId;
    private Long shippingAddressId;
}
