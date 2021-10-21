import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import style from "app/styles/index.module.scss"

type ServiceEnums = {
  icon: string
  title: string
}

const services: ServiceEnums[] = [
  { icon: "</>", title: "Web Tasarım" },
  { icon: "", title: "" },
]

const Services: BlitzPage = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.landingContent}>
          <h2 className={style.headerContent + " " + style.fullWidth}>
            Servislerimiz hakkında bilgi alın
          </h2>
          <p className={style.contentLabel + " " + style.fullWidth}>
            Inception Game Productions olarak teknoloji alanında birçok hizmetimiz mevcut. Bununla
            beraber internet sayfaları, oyun sunucu dosyaları, veritabanı optimizasyonları, sosyal
            medya asistanlığı gibi birçok konuda size yardımcı oluyoruz. Size en iyi imkanları
            sunarak en yüksek başarıya ulaşmanızı sağlıyoruz. Sizin için her şeyi yapmaya hazırız.
            Aşağıda hangi servislerimizin olduğu yazıyor.
          </p>
          <div className={style.serviceItems}>
            {services.map((service) => {
              return (
                <div className={style.item}>
                  <h2>{service.icon}</h2>
                  <span>{service.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Services.suppressFirstRenderFlicker = true
Services.getLayout = (page) => <Layout title="Servisler - Inception">{page}</Layout>

export default Services
