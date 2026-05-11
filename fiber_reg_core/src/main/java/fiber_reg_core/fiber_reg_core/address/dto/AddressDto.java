package fiber_reg_core.fiber_reg_core.address.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
    private Long id;
    private String province; /* Województwo */
    private String district; /* Powiat */
    private String commune; /* Gmina */
    private String city; /* Miasto */
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String zipCode;
}
