"use client";
import "../app/globals.css";
import Annoucement from "@/components/Annoucement";
import InfoContainer from "@/components/InfoContainer";
import Layout from "@/components/Layout";
import VideosRow from "@/components/VideosRow";
import { videos } from "@/constants";

export default function Index() {
  return (
    <>
      <Layout>
        <Annoucement />
        <VideosRow pageVideo={videos}/>
        <InfoContainer />
      </Layout>
    </>
  );
}
