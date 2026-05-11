package fiber_reg_core.fiber_reg_core.customer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CustomerCreatedResponse {
    private Long id;
    private String name;
}
