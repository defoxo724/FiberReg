package fiber_reg_core.fiber_reg_core.customer;

import org.springframework.web.bind.annotation.RestController;

import fiber_reg_core.fiber_reg_core.address.dto.CreateAddressRequest;
import fiber_reg_core.fiber_reg_core.address.dto.AddressResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.CreateCustomerRequest;
import fiber_reg_core.fiber_reg_core.customer.dto.CustomerCreatedResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.CustomerListElementResponse;
import fiber_reg_core.fiber_reg_core.customer.dto.FullCustomerDataResponse;
import fiber_reg_core.fiber_reg_core.helpers.AddressType;
import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//TODO: Change "user" to "customer"
@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<List<CustomerListElementResponse>> getAllCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    @PostMapping("/customers")
    public ResponseEntity<CustomerCreatedResponse> createNewCustomer(@RequestBody CreateCustomerRequest newCustomer) {
        return ResponseEntity.ok(customerService.createNewCustomer(newCustomer));
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<FullCustomerDataResponse> getCustomerData(@PathVariable Long id) {
        return ResponseEntity.ok(customerService.getCustomerData(id));
    }

    @PostMapping("/customers/{userId}/addresses/{type}")
    public ResponseEntity<Void> createRegisteredAddressAndAssignToCustomer(
            @RequestBody CreateAddressRequest entity,
            @PathVariable Long userId,
            @PathVariable AddressType type) {

        customerService.createAndAssignAddress(entity, userId, type);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/customers/{customerId}/addresses/{type}")
    public ResponseEntity<AddressResponse> getRegisteredAddress(
            @PathVariable Long customerId,
            @PathVariable AddressType type) {

        return ResponseEntity.ok(customerService.getAddress(customerId, type));
    }

    @GetMapping("/customers/search")
    public ResponseEntity<List<CustomerListElementResponse>> searchCustomers(@RequestParam String searchString) {
        return ResponseEntity.ok(customerService.searchForCustomer(searchString));
    }

}
