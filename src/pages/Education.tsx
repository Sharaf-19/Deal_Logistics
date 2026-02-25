import AnnouncementsCarousel from "../components/education/AnnouncementsCarousel";
import EducationContact from "../components/education/EducationContact";
import EducationHero from "../components/education/EducationHero";
import ProgramsGrid from "../components/education/ProgramsGrid";
import WhyChina from "../components/education/WhyChina";
import Footer from "../components/Footer";

const Education = () => {
  return (
    <main>
      <EducationHero />
      <AnnouncementsCarousel />
      <ProgramsGrid />
      <WhyChina />
      <EducationContact />
      <Footer />
    </main>
  );
};

export default Education;
