import styles from "./WelcomeScreen.module.css"

export function WelcomeScreen() {
    return (
        <div className={styles.container}>
            <h3>Welcome screen</h3>

            <p className={styles.title}> Display a custom logo while your page is loading </p>
        </div>
    )
}