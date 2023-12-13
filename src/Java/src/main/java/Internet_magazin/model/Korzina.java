package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Корзина
 */
@Entity(name = "IISInternet_magazinКорзина")
@Table(schema = "public", name = "Корзина")
public class Korzina {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "КодКорзины")
    private Integer кодкорзины;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakazy")
    @Convert("Zakazy")
    @Column(name = "Заказы", length = 16, unique = true, nullable = false)
    private UUID _zakazyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakazy", insertable = false, updatable = false)
    private Zakazy zakazy;


    public Korzina() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getКодКорзины() {
      return кодкорзины;
    }

    public void setКодКорзины(Integer кодкорзины) {
      this.кодкорзины = кодкорзины;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }


}