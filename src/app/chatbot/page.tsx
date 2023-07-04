"use client";
import Annoucement from "@/components/Annoucement";
import InfoContainer from "@/components/InfoContainer";
import Layout from "@/components/Layout";
import VideosRow from "@/components/VideosRow";
import { chatVideos } from "@/constants";

export default function Page() {
  return (
    <>
      <Layout>
        <Annoucement />
        <VideosRow pageVideo={chatVideos}/>
        <InfoContainer />
      </Layout>
    </>
  );
}
