import GlobalStyle from "@/app/globalStyles";
import Annoucement from "@/components/Annoucement";
import Navbar from "@/components/Navbar";
import VideosRow from "@/components/VideosRow";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Annoucement />
      <VideosRow />
    </>
  );
}
