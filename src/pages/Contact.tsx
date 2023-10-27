import ContactForm from "@components/ContactPageComponents/ContactForm/ContactForm";
import Map from "@components/ContactPageComponents/Map/Map";
import ContactTitle from "@components/ContactPageComponents/Title/ContactTitle";

const Contact = () => {
    return (
        <main>
            <ContactTitle/>
            <ContactForm/>
            <Map/>
        </main>
    )
}

export default Contact;