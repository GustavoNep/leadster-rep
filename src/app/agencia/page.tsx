"use client";
import Annoucement from "@/components/Annoucement";
import InfoContainer from "@/components/InfoContainer";
import Layout from "@/components/Layout";
import VideosRow from "@/components/VideosRow";
import { agencyVideos } from "@/constants";

export default function Page() {
  return (
    <>
      <Layout>
        <Annoucement />
        <VideosRow pageVideo={agencyVideos}/>
        <InfoContainer />
      </Layout>
    </>
  );
}
