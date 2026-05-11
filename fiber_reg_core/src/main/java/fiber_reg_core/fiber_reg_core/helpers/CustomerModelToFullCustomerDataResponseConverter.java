package fiber_reg_core.fiber_reg_core.helpers;

import fiber_reg_core.fiber_reg_core.customer.CustomerModel;
import fiber_reg_core.fiber_reg_core.customer.dto.FullCustomerDataResponse;

public class CustomerModelToFullCustomerDataResponseConverter {
    public static FullCustomerDataResponse convert(CustomerModel model) {
        FullCustomerDataResponse response = new FullCustomerDataResponse();
        response.setId(model.getId());
        response.setName(model.getName());
        response.setRegisteredAddressId(
                (model.getRegisteredAddress() != null) ? model.getRegisteredAddress().getId() : null);
        response.setMailingAddressId((model.getMailingAddress() != null) ? model.getMailingAddress().getId() : null);
        response.setBillingAddressId((model.getBillingAddress() != null) ? model.getBillingAddress().getId() : null);
        response.setShippingAddressId((model.getShippingAddress() != null) ? model.getShippingAddress().getId() : null);

        return response;
    }
}
