package Internet_magazin.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Internet_magazin.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказы
 */
@Entity(name = "IISInternet_magazinЗаказы")
@Table(schema = "public", name = "Заказы")
public class Zakazy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаказа")
    private Date датазаказа;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "Вобработке")
    private String вобработке;

    @Column(name = "Время")
    private String время;

    @Column(name = "Завершен")
    private String завершен;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "КодАдреса")
    private Integer кодадреса;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Adres")
    @Convert("Adres")
    @Column(name = "Адрес", length = 16, unique = true, nullable = false)
    private UUID _adresid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Adres", insertable = false, updatable = false)
    private Adres adres;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Tovar> tovars;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Korzina> korzinas;


    public Zakazy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаказа() {
      return датазаказа;
    }

    public void setДатаЗаказа(Date датазаказа) {
      this.датазаказа = датазаказа;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public String getВобработке() {
      return вобработке;
    }

    public void setВобработке(String вобработке) {
      this.вобработке = вобработке;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public String getЗавершен() {
      return завершен;
    }

    public void setЗавершен(String завершен) {
      this.завершен = завершен;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public Integer getКодАдреса() {
      return кодадреса;
    }

    public void setКодАдреса(Integer кодадреса) {
      this.кодадреса = кодадреса;
    }


}