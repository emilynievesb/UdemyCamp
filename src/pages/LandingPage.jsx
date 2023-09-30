import { Header } from "../components/Header";
import { SectionHome } from "../components/SectionHome";
import { CoursesSection } from "../components/CoursesSection";
import { SectionFooter } from "../components/SectionFooter";
function LandingPage() {
  return (
    <>
      <Header></Header>
      <SectionHome></SectionHome>
      <CoursesSection></CoursesSection>
      <SectionFooter></SectionFooter>
    </>
  );
}
export { LandingPage };
