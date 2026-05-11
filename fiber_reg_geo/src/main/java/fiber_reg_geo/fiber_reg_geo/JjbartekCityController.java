package fiber_reg_geo.fiber_reg_geo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class JjbartekCityController {
    private final JjbartekCityService service;

    @PostMapping("/import")
    public ResponseEntity<Long> importCities(@RequestBody List<JjbartekCityModel> list) {
        return ResponseEntity.ok(service.fillDatabase(list));
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<JjbartekCityModel>> getAllData() {
        return ResponseEntity.ok(service.getAllData());
    }

    @GetMapping("/geo/provinces")
    public ResponseEntity<List<String>> getListOfProvinces() {
        return ResponseEntity.ok(service.getListOfProvinces());
    }

    @GetMapping("/geo/{province}/districts")
    public ResponseEntity<List<String>> getListOfDistricts(@PathVariable String province) {
        return ResponseEntity.ok(service.getListOfDistricts(province));
    }

    @GetMapping("/geo/{province}/{district}/communes")
    public ResponseEntity<List<String>> getListOfDistricts(
            @PathVariable String province,
            @PathVariable String district) {
        return ResponseEntity.ok(service.getListOfCommunes(province, district));
    }

    @GetMapping("/geo/{province}/{district}/{commune}/cities")
    public ResponseEntity<List<String>> getListOfCities(
            @PathVariable String province,
            @PathVariable String district,
            @PathVariable String commune) {
        return ResponseEntity.ok(service.getListOfCities(province, district, commune));
    }

    @GetMapping("/geo/{province}/{district}/{commune}/{name}/details")
    public ResponseEntity<List<JjbartekCityModel>> getCity(
            @PathVariable String province,
            @PathVariable String district,
            @PathVariable String commune,
            @PathVariable String name) {
        return ResponseEntity.ok(service.getCity(province, district, commune, name));
    }
}
