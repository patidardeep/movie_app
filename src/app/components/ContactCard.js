import styles from "@/app/contact/contact.module.css"
import Link from "next/link"
import { MdEmail, MdForum, MdVoiceChat } from 'react-icons/md';


export default function ContactCard() {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i><MdEmail /></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time:72 hourse</p>
                        <Link href="/">Send Email<sapn>-&
                            gt;</sapn></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i><MdVoiceChat /></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM - 6 PM ET</p>
                        <p className={styles.last_para}>Weekends:9 AM - 5 PM ET</p>
                        <Link href="/">Chat Now<sapn>-&
                            gt;</sapn></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i><MdForum /></i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time:72 hourse</p>
                        <Link href="/" className={styles.anchorLink}>Ask The Community<sapn>-&
                            gt;</sapn></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}