



CREATE TABLE "Категория"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"КодКатегории" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Корзина"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"КодКорзины" NUMBER(10) NULL,

	"КодТовара" NUMBER(10) NULL,

	"КодЗаказа" NUMBER(10) NULL,

	"Заказы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Заказы"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаказа" DATE NULL,

	"КодЗаказа" NUMBER(10) NULL,

	"КодКлиента" NUMBER(10) NULL,

	"Вобработке" NUMBER(3) NULL,

	"Время" NVARCHAR2(255) NULL,

	"Завершен" NUMBER(3) NULL,

	"Сумма" FLOAT(126) NULL,

	"КодАдреса" NUMBER(10) NULL,

	"Адрес" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЭлПочта" NVARCHAR2(255) NULL,

	"КодКлиента" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Адрес"
(

	"primaryKey" RAW(16) NOT NULL,

	"Улица" NVARCHAR2(255) NULL,

	"Город" NVARCHAR2(255) NULL,

	"КодАдреса" NUMBER(10) NULL,

	"КодКлиента" NUMBER(10) NULL,

	"Индекс" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товар"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодТовара" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	"Цвет" NVARCHAR2(255) NULL,

	"КодКатегории" NUMBER(10) NULL,

	"Категория" RAW(16) NOT NULL,

	"Заказы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Корзина"
	ADD CONSTRAINT "Корзина_FЗаказы_0" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "Корзина_IЗаказы" on "Корзина" ("Заказы");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FАдрес_0" FOREIGN KEY ("Адрес") REFERENCES "Адрес" ("primaryKey");

CREATE INDEX "Заказы_IАдрес" on "Заказы" ("Адрес");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FКлиент_0" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "Заказы_IКлиент" on "Заказы" ("Клиент");

ALTER TABLE "Товар"
	ADD CONSTRAINT "Товар_FКатего_3612" FOREIGN KEY ("Категория") REFERENCES "Категория" ("primaryKey");

CREATE INDEX "Товар_IКатегория" on "Товар" ("Категория");

ALTER TABLE "Товар"
	ADD CONSTRAINT "Товар_FЗаказы_0" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "Товар_IЗаказы" on "Товар" ("Заказы");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


