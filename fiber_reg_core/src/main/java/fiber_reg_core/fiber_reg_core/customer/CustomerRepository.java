package fiber_reg_core.fiber_reg_core.customer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerModel, Long> {
    @Query("SELECT c FROM CustomerModel c WHERE c.name LIKE %?1%")
    List<CustomerModel> searchForCustomer(String str);
}
