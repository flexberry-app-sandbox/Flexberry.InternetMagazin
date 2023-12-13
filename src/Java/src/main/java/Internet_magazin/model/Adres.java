package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Адрес
 */
@Entity(name = "IISInternet_magazinАдрес")
@Table(schema = "public", name = "Адрес")
public class Adres {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Улица")
    private String улица;

    @Column(name = "Город")
    private String город;

    @Column(name = "КодАдреса")
    private Integer кодадреса;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "Индекс")
    private Integer индекс;


    public Adres() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУлица() {
      return улица;
    }

    public void setУлица(String улица) {
      this.улица = улица;
    }

    public String getГород() {
      return город;
    }

    public void setГород(String город) {
      this.город = город;
    }

    public Integer getКодАдреса() {
      return кодадреса;
    }

    public void setКодАдреса(Integer кодадреса) {
      this.кодадреса = кодадреса;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public Integer getИндекс() {
      return индекс;
    }

    public void setИндекс(Integer индекс) {
      this.индекс = индекс;
    }


}