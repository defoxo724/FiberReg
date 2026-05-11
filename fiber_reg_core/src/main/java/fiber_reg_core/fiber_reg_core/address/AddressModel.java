package fiber_reg_core.fiber_reg_core.address;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddressModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
