import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
    </main>
  )
}

export default page