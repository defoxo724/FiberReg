package fiber_reg_geo.fiber_reg_geo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JjbartekCityService {
    private final JjbartekCityRepository repository;

    public Long fillDatabase(List<JjbartekCityModel> list) {
        repository.deleteAll();
        repository.saveAll(list);
        System.out.println("Zapisało");
        return repository.count();
    }

    public List<JjbartekCityModel> getAllData() {
        return repository.findAll();
    }

    public List<String> getListOfProvinces() {
        return repository.getListOfProvinces();
    }

    public List<String> getListOfDistricts(String province) {
        return repository.getListOfDistricts(province);
    }

    public List<String> getListOfCommunes(String province, String district) {
        return repository.getListOfCommunes(province, district);
    }

    public List<String> getListOfCities(String province, String district, String commune) {
        return repository.getListOfCities(province, district, commune);
    }

    public List<JjbartekCityModel> getCity(String province, String district, String commune, String name) {
        return repository.getCity(province, district, commune, name);
    }

}
