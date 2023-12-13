package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IISInternet_magazinТовар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Double стоимость;

    @Column(name = "Цвет")
    private String цвет;

    @Column(name = "КодКатегории")
    private Integer кодкатегории;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kategoriya")
    @Convert("Kategoriya")
    @Column(name = "Категория", length = 16, unique = true, nullable = false)
    private UUID _kategoriyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kategoriya", insertable = false, updatable = false)
    private Kategoriya kategoriya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakazy")
    @Convert("Zakazy")
    @Column(name = "Заказы", length = 16, unique = true, nullable = false)
    private UUID _zakazyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakazy", insertable = false, updatable = false)
    private Zakazy zakazy;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }

    public String getЦвет() {
      return цвет;
    }

    public void setЦвет(String цвет) {
      this.цвет = цвет;
    }

    public Integer getКодКатегории() {
      return кодкатегории;
    }

    public void setКодКатегории(Integer кодкатегории) {
      this.кодкатегории = кодкатегории;
    }


}