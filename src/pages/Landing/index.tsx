import Annoucement from "@/components/Annoucement";
import Footer from "@/components/Footer";
import InfoContainer from "@/components/InfoContainer";
import Navbar from "@/components/Navbar";
import VideosRow from "@/components/VideosRow";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Annoucement />
      <VideosRow />
      <InfoContainer />
      <Footer />
    </>
  );
}
