import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css"

export default function Contact(){
    return(
        <>
        <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard/>


        <section className={styles.contact_section}>
            <h2>We'd love to hear <span>from you</span></h2>

            <ContactForm/>
        </section>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3350465143158!2d75.89112842387593!3d22.752944076339137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1688620680660!5m2!1sen!2sin" width={100} height={300} style={{border:0}}allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
