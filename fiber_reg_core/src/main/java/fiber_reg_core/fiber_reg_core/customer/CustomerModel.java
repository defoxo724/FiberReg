package fiber_reg_core.fiber_reg_core.customer;

import fiber_reg_core.fiber_reg_core.address.AddressModel;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class CustomerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "registered_address_id", nullable = true)
    private AddressModel registeredAddress; /* Adres rejestrowy */

    @ManyToOne
    @JoinColumn(name = "mailing_address_id", nullable = true)
    private AddressModel mailingAddress; /* Adres do korespondencji */

    @ManyToOne
    @JoinColumn(name = "billing_address_id", nullable = true)
    private AddressModel billingAddress; /* Adres do faktur */

    @ManyToOne
    @JoinColumn(name = "shipping_address_id", nullable = true)
    private AddressModel shippingAddress; /* Adres do wysyłek / dostawy */
}
