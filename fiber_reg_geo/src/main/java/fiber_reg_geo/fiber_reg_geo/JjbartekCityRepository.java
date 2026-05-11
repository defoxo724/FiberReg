package fiber_reg_geo.fiber_reg_geo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface JjbartekCityRepository extends JpaRepository<JjbartekCityModel, Long> {

    @Query("SELECT DISTINCT c.Province FROM JjbartekCityModel c ORDER BY c.Province ASC")
    public List<String> getListOfProvinces();

    @Query("SELECT DISTINCT c.District FROM JjbartekCityModel c WHERE c.Province = :province ORDER BY c.District ASC")
    public List<String> getListOfDistricts(String province);

    @Query("SELECT DISTINCT c.Commune FROM JjbartekCityModel c WHERE c.Province = :province AND c.District = :district  ORDER BY c.Commune ASC")
    public List<String> getListOfCommunes(String province, String district);

    @Query("SELECT DISTINCT c.Name FROM JjbartekCityModel c WHERE c.Province = :province AND c.District = :district AND c.Commune = :commune ORDER BY c.Name ASC")
    public List<String> getListOfCities(String province, String district, String commune);

    @Query("SELECT DISTINCT c FROM JjbartekCityModel c WHERE c.Province = :province AND c.District = :district AND c.Commune = :commune AND c.Name = :name ORDER BY c.Name ASC")
    public List<JjbartekCityModel> getCity(String province, String district, String commune, String name);
}
