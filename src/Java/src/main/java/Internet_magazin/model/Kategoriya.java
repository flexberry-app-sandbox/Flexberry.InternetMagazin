package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Категория
 */
@Entity(name = "IISInternet_magazinКатегория")
@Table(schema = "public", name = "Категория")
public class Kategoriya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "КодКатегории")
    private Integer кодкатегории;


    public Kategoriya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Integer getКодКатегории() {
      return кодкатегории;
    }

    public void setКодКатегории(Integer кодкатегории) {
      this.кодкатегории = кодкатегории;
    }


}