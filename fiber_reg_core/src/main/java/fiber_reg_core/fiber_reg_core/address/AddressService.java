package fiber_reg_core.fiber_reg_core.address;

import org.springframework.stereotype.Service;

import fiber_reg_core.fiber_reg_core.address.dto.CreateAddressRequest;
import fiber_reg_core.fiber_reg_core.address.dto.AddressDto;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AddressService {
    private final AddressRepository addressRepository;

    public AddressDto createNewAddress(CreateAddressRequest dto) {
        AddressModel model = new AddressModel();
        model.setProvince(dto.getProvince());
        model.setDistrict(dto.getDistrict());
        model.setCommune(dto.getCommune());
        model.setCity(dto.getCity());
        model.setStreet(dto.getStreet());
        model.setHouseNumber(dto.getHouseNumber());
        model.setApartmentNumber(dto.getApartmentNumber());
        model.setZipCode(dto.getZipCode());

        AddressModel savedModel = addressRepository.save(model);

        return new AddressDto(
                savedModel.getId(),
                savedModel.getProvince(),
                savedModel.getDistrict(),
                savedModel.getCommune(),
                savedModel.getCity(),
                savedModel.getStreet(),
                savedModel.getHouseNumber(),
                savedModel.getApartmentNumber(),
                savedModel.getZipCode());
    }

    public AddressDto getAddressById(Long id) {
        AddressModel model = addressRepository.findById(id).get();

        return new AddressDto(
                model.getId(),
                model.getProvince(),
                model.getDistrict(),
                model.getCommune(),
                model.getCity(),
                model.getStreet(),
                model.getHouseNumber(),
                model.getApartmentNumber(),
                model.getZipCode());
    }
}
