package fiber_reg_core.fiber_reg_core.customer;

import fiber_reg_core.fiber_reg_core.address.AddressModel;
import fiber_reg_core.fiber_reg_core.address.AddressRepository;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import fiber_reg_core.fiber_reg_core.address.AddressService;
import fiber_reg_core.fiber_reg_core.address.dto.CreateAddressRequest;
import fiber_reg_core.fiber_reg_core.address.dto.AddressDto;
import fiber_reg_core.fiber_reg_core.address.dto.AddressResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.CreateCustomerRequest;
import fiber_reg_core.fiber_reg_core.customer.dto.CustomerCreatedResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.CustomerListElementResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.FullCustomerDataResponse;
import fiber_reg_core.fiber_reg_core.helpers.AddressModelToAddressResponseConverter;
import fiber_reg_core.fiber_reg_core.helpers.AddressType;
import fiber_reg_core.fiber_reg_core.helpers.CustomerModelToFullCustomerDataResponseConverter;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomerService {
    private final AddressRepository addressRepository;
    private final CustomerRepository customerRepository;
    private final AddressService addressService;
    private static final Logger log = LoggerFactory.getLogger(CustomerService.class);

    /**
     * Creates new CustomerModel and set it's name from request
     * 
     * @param request Request with customer name as string
     * @return Response with created customer's id and name
     */
    public CustomerCreatedResponse createNewCustomer(CreateCustomerRequest request) {
        CustomerModel model = new CustomerModel();
        model.setName(request.getName());

        CustomerModel savedModel = customerRepository.save(model);

        log.info("Created new customer with data: " + savedModel);
        return new CustomerCreatedResponse(savedModel.getId(), savedModel.getName());
    }

    /**
     * Returns list of customers
     * 
     * @return List of customers with id and name
     */
    public List<CustomerListElementResponse> getAllCustomers() {
        List<CustomerListElementResponse> customers = new ArrayList<>();

        customers = customerRepository.findAll()
                .stream()
                .map(model -> new CustomerListElementResponse(
                        model.getId(),
                        model.getName()))
                .toList();
        log.info("Retrieved all customers data");

        return customers;

    }

    /**
     * Finds customer and returns it's data
     * 
     * @param id Id of the customer
     * @return Response with full data of found customer
     */
    public FullCustomerDataResponse getCustomerData(Long id) {
        CustomerModel model = customerRepository.findById(id).get();
        log.info("Retrieved data of customer of id " + id);
        return CustomerModelToFullCustomerDataResponseConverter.convert(model);
    }

    /**
     * Creates new address and assigns to customer
     * 
     * @param addressCreateDto data of address
     * @param customerId       customer id
     * @param type             type of the address
     */
    public void createAndAssignAddress(CreateAddressRequest addressCreateDto, Long customerId, AddressType type) {
        AddressDto addressDto = addressService.createNewAddress(addressCreateDto);
        AddressModel addressModel = addressRepository.findById(addressDto.getId()).get();
        CustomerModel customerModel = customerRepository.findById(customerId).get();
        switch (type) {
            case REGISTERED:
                customerModel.setRegisteredAddress(addressModel);
                break;
            case BILLING:
                customerModel.setBillingAddress(addressModel);
                break;
            case MAILING:
                customerModel.setMailingAddress(addressModel);
                break;
            case SHIPPING:
                customerModel.setShippingAddress(addressModel);
                break;
            default:
                break;
        }

        customerRepository.save(customerModel);
        log.info("Created new address " + addressDto + " with type  " + type + " and assigned to user of id "
                + customerId);
    }

    /**
     * Retrieves address data of customer
     * 
     * @param customerId customer id
     * @param type       type of the address
     * @return address details
     */
    public AddressResponse getAddress(Long customerId, AddressType type) {
        CustomerModel customerModel = customerRepository.findById(customerId).get();
        AddressModel addressModel = null;

        switch (type) {
            case REGISTERED:
                addressModel = customerModel.getRegisteredAddress();
                break;
            case BILLING:
                addressModel = customerModel.getBillingAddress();
                break;
            case MAILING:
                addressModel = customerModel.getMailingAddress();
                break;
            case SHIPPING:
                addressModel = customerModel.getShippingAddress();
                break;
            default:
                break;
        }
        log.info("Retrieved data of " + type + " of customer of id " + customerId);
        return AddressModelToAddressResponseConverter.convert(addressModel);
    }

}
