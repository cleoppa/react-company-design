import React from "react"
import Image from "next/image"
import Layout from "src/core/layouts/Layout"

import style from "src/styles/index.module.scss"

export async function getStaticProps(context) {
  const res = await fetch("https://www.inception.com.tr/api/v1/game/total_players.php")
  const data = await res.json()

  return {
    props: { data },
  }
}

const Home = ({ data }) => {
  const totalPlayersCount: number = data ? data.total : 0
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.landingContent}>
          <div className={style.gridLayout}>
            <div className={style.gridItem}>
              <h2 className={style.headerContent}>
                Oyunların ne kadar gerçekçi olabileceğini hayal edin.
              </h2>
              <p className={style.contentLabel}>
                Multi Theft Auto oyun istemcisinin içerisinde gerçek hayatı oyuncularımıza
                yaşatıyoruz. Oyun gerçekçiliği hakkında sürekli çalışıyor ve belirli kurallar ile
                oyun hissini en doruklara çıkarıyoruz.
              </p>
              <div className={style.onlinesContent}>
                <div className={style.greenDot}></div>
                <span>Hizmetlerimizi anlık olarak {totalPlayersCount} kişi kullanıyor.</span>
              </div>
            </div>
            <div className={style.gridItem + " " + style.flex}>
              <div className={style.headerImage}>
                <Image src="/right-content.png" alt="Content image" width="401" height="450" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.ourServices}>
          <h4>
            hizmetlerimiz <span>(yoğunluğa göre sıralanır)</span>{" "}
          </h4>
          <div className={style.serverList}>
            {Object.keys(data).map((key) => {
              if (key != "total") {
                const row = data[key]
                return (
                  <div key={key} className={style.item}>
                    <span>{row.name}</span>
                    <p>Platform: {row.platform}</p>
                    <p>Oyuncu: {row.players}</p>
                    <p>IP: {row.ip}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div className={style.longLabels}>
          <div className={style.absolutePath}>
            <h2>WE ARE DEVELOP</h2>
            <h2>
              <span>ROLEPLAY</span> GAMES
            </h2>
          </div>
          <h4>Neler yapıyoruz?</h4>
          <p>
            Oyun sunucuları, internet sayfaları, afiş tasarımları veya sosyal medya asistanlığı.
            Aklınıza gelebilecek her türlü teknolojik işleri hallediyoruz. Çünkü biz teknolojiden
            geliyoruz. Örneğin, internetten ürün mü satmak istiyorsunuz? Sizin için ödeme sayfası
            oluşturalım, verginiz ve faturanız otomatik kesilsin, keyfinize bakın! Yeni çağın
            yükselen teknolojisinden ancak bizi bilenler faydalanır! Detaylı bilgi için bize mail
            göndermeyi unutmayın.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Ana Sayfa - Inception">{page}</Layout>

export default Home
