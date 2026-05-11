package fiber_reg_geo.fiber_reg_geo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "jjbartek_city_model")
/*
 * Mapped from
 * https://raw.githubusercontent.com/jjbartek/polskie-miejscowosci/refs/heads/
 * main/data.json
 */
public class JjbartekCityModel {

    @Id
    private Long Id;
    private String Name;
    private String Type;
    private String Province;
    private String District;
    private String Commune;
    private float Latitude;
    private float Longitude;
}
