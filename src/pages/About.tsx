import BannerSlogan from "@components/AboutPageComponents/BannerSlogan/BannerSlogan";
import DescriptionCompany from "@components/AboutPageComponents/DescriptionCompany/DescriptionCompany";
import HistoryCompany from "@components/AboutPageComponents/HistotyCompany/HistoryCompany";

const About = () => {
    return (
        <main>
            <DescriptionCompany/>
            <BannerSlogan/>
            <HistoryCompany/>
        </main>
    )
}

export default About;