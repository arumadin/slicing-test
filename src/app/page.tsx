import Header from "./components/Header";
import SectionSlides from "./components/SectionSlides"

import './style/style.scss'

export default function Home() {

  return (
    <main className='main-layout'>
      <Header />
      <SectionSlides />
    </main>
  );
}
