package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISInternet_magazinКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЭлПочта")
    private String элпочта;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Фамилия")
    private String фамилия;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЭлПочта() {
      return элпочта;
    }

    public void setЭлПочта(String элпочта) {
      this.элпочта = элпочта;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }


}