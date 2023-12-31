﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Internet_magazin
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товар.
    /// </summary>
    // *** Start programmer edit section *** (Товар CustomAttributes)

    // *** End programmer edit section *** (Товар CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварE", new string[] {
            "КодТовара as \'Код товара\'",
            "Наименование as \'Наименование\'",
            "Стоимость as \'Стоимость\'",
            "Цвет as \'Цвет\'",
            "КодКатегории as \'Код категории\'",
            "Категория as \'Категория\'",
            "Категория.Название as \'Название\'"}, Hidden=new string[] {
            "Категория.Название"})]
    [MasterViewDefineAttribute("ТоварE", "Категория", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    public class Товар : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодТовара;
        
        private string fНаименование;
        
        private double fСтоимость;
        
        private string fЦвет;
        
        private int fКодКатегории;
        
        private IIS.Internet_magazin.Категория fКатегория;
        
        private IIS.Internet_magazin.Заказы fЗаказы;
        
        // *** Start programmer edit section *** (Товар CustomMembers)

        // *** End programmer edit section *** (Товар CustomMembers)

        
        /// <summary>
        /// КодКатегории.
        /// </summary>
        // *** Start programmer edit section *** (Товар.КодКатегории CustomAttributes)

        // *** End programmer edit section *** (Товар.КодКатегории CustomAttributes)
        public virtual int КодКатегории
        {
            get
            {
                // *** Start programmer edit section *** (Товар.КодКатегории Get start)

                // *** End programmer edit section *** (Товар.КодКатегории Get start)
                int result = this.fКодКатегории;
                // *** Start programmer edit section *** (Товар.КодКатегории Get end)

                // *** End programmer edit section *** (Товар.КодКатегории Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.КодКатегории Set start)

                // *** End programmer edit section *** (Товар.КодКатегории Set start)
                this.fКодКатегории = value;
                // *** Start programmer edit section *** (Товар.КодКатегории Set end)

                // *** End programmer edit section *** (Товар.КодКатегории Set end)
            }
        }
        
        /// <summary>
        /// КодТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товар.КодТовара CustomAttributes)

        // *** End programmer edit section *** (Товар.КодТовара CustomAttributes)
        public virtual int КодТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товар.КодТовара Get start)

                // *** End programmer edit section *** (Товар.КодТовара Get start)
                int result = this.fКодТовара;
                // *** Start programmer edit section *** (Товар.КодТовара Get end)

                // *** End programmer edit section *** (Товар.КодТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.КодТовара Set start)

                // *** End programmer edit section *** (Товар.КодТовара Set start)
                this.fКодТовара = value;
                // *** Start programmer edit section *** (Товар.КодТовара Set end)

                // *** End programmer edit section *** (Товар.КодТовара Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Наименование CustomAttributes)

        // *** End programmer edit section *** (Товар.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Наименование Get start)

                // *** End programmer edit section *** (Товар.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Товар.Наименование Get end)

                // *** End programmer edit section *** (Товар.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Наименование Set start)

                // *** End programmer edit section *** (Товар.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Товар.Наименование Set end)

                // *** End programmer edit section *** (Товар.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Товар.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Стоимость Get start)

                // *** End programmer edit section *** (Товар.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (Товар.Стоимость Get end)

                // *** End programmer edit section *** (Товар.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Стоимость Set start)

                // *** End programmer edit section *** (Товар.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Товар.Стоимость Set end)

                // *** End programmer edit section *** (Товар.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Цвет.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Цвет CustomAttributes)

        // *** End programmer edit section *** (Товар.Цвет CustomAttributes)
        [StrLen(255)]
        public virtual string Цвет
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Цвет Get start)

                // *** End programmer edit section *** (Товар.Цвет Get start)
                string result = this.fЦвет;
                // *** Start programmer edit section *** (Товар.Цвет Get end)

                // *** End programmer edit section *** (Товар.Цвет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Цвет Set start)

                // *** End programmer edit section *** (Товар.Цвет Set start)
                this.fЦвет = value;
                // *** Start programmer edit section *** (Товар.Цвет Set end)

                // *** End programmer edit section *** (Товар.Цвет Set end)
            }
        }
        
        /// <summary>
        /// Товар.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Категория CustomAttributes)

        // *** End programmer edit section *** (Товар.Категория CustomAttributes)
        [PropertyStorage(new string[] {
                "Категория"})]
        [NotNull()]
        public virtual IIS.Internet_magazin.Категория Категория
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Категория Get start)

                // *** End programmer edit section *** (Товар.Категория Get start)
                IIS.Internet_magazin.Категория result = this.fКатегория;
                // *** Start programmer edit section *** (Товар.Категория Get end)

                // *** End programmer edit section *** (Товар.Категория Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Категория Set start)

                // *** End programmer edit section *** (Товар.Категория Set start)
                this.fКатегория = value;
                // *** Start programmer edit section *** (Товар.Категория Set end)

                // *** End programmer edit section *** (Товар.Категория Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Internet_magazin.Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Заказы CustomAttributes)

        // *** End programmer edit section *** (Товар.Заказы CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказы"})]
        public virtual IIS.Internet_magazin.Заказы Заказы
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Заказы Get start)

                // *** End programmer edit section *** (Товар.Заказы Get start)
                IIS.Internet_magazin.Заказы result = this.fЗаказы;
                // *** Start programmer edit section *** (Товар.Заказы Get end)

                // *** End programmer edit section *** (Товар.Заказы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Заказы Set start)

                // *** End programmer edit section *** (Товар.Заказы Set start)
                this.fЗаказы = value;
                // *** Start programmer edit section *** (Товар.Заказы Set end)

                // *** End programmer edit section *** (Товар.Заказы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварE", typeof(IIS.Internet_magazin.Товар));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Товар.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТовар CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТовар CustomAttributes)
    public class DetailArrayOfТовар : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Internet_magazin.DetailArrayOfТовар members)

        // *** End programmer edit section *** (IIS.Internet_magazin.DetailArrayOfТовар members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Товар by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Товар.
        /// </summary>
        public DetailArrayOfТовар(IIS.Internet_magazin.Заказы fЗаказы) : 
                base(typeof(Товар), ((ICSSoft.STORMNET.DataObject)(fЗаказы)))
        {
        }
        
        public IIS.Internet_magazin.Товар this[int index]
        {
            get
            {
                return ((IIS.Internet_magazin.Товар)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Internet_magazin.Товар dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
