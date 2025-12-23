import Banner from "./Banner";
import News from "./News";
import Recommended from "./Recommended";
import TopSellers from "./TopSellers";

export default function Home () {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </>
  )
}