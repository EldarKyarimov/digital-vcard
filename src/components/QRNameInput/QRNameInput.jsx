import styles from "./QRNameInput.module.css"

export function QrNameInput() {
    return (
        <div className={styles.container}>
            <h3>QR kodunuza Ad verin</h3>
            <input placeholder="m.u. mənim ilk QR kodum" className={styles.input} />
        </div>
    )
}