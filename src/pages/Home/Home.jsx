import { QrNameInput } from "../../components/QRNameInput/QRNameInput";
import { DesignSettings } from "../../components/DesignSettings/DesignSettings"
import { AboutYou } from "../../components/AboutYou/AboutYou"
import { SocialNetworks } from "../../components/Social networks/SocialNetworks"
import { WelcomeScreen } from "../../components/Welcome screen/WelcomeScreen"
import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.home}>
            <h2>My VCard</h2>
            <h3>Rəqəmsal QR karta məzmun əlavə edin</h3>

            <section className={styles.componentsWrapper}>
                <QrNameInput />
                <DesignSettings />
                <AboutYou />
                <SocialNetworks />
                <WelcomeScreen />

            </section>
        </div>
    )
}

export default Home;