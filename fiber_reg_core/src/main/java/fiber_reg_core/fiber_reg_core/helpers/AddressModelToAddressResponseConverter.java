package fiber_reg_core.fiber_reg_core.helpers;

import fiber_reg_core.fiber_reg_core.address.AddressModel;
import fiber_reg_core.fiber_reg_core.address.dto.AddressResponse;

public class AddressModelToAddressResponseConverter {
    public static AddressResponse convert(AddressModel addressModel) {
        return new AddressResponse(
                addressModel.getId(),
                addressModel.getProvince(),
                addressModel.getDistrict(),
                addressModel.getCommune(),
                addressModel.getCity(),
                addressModel.getStreet(),
                addressModel.getHouseNumber(),
                addressModel.getApartmentNumber(),
                addressModel.getZipCode());
    }
}
