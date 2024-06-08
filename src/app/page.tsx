import Footer from "@/components/footer";
import AboutUs from "@/components/aboutus";
import LandingPage from "@/components/landing-page"
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LandingPage/>
      <AboutUs/>
      <Footer />
    </main>
  );
}
