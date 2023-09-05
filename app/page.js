import Hero from '@components/Hero/Hero';
import Navbar from '@components/Navbar';
import styles from '@styles/style';
import './globals.css'

const Home = () => {

  return (
    <div>
      <section >

        <div className={`${styles.flexStart} `}>
          <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexStart}`}>
            <Hero />
          </div>
        </div>

        {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}> */}
        {/* <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
        {/* </div>
        </div> */}
      </section>
    </div>
  )

};

export default Home;