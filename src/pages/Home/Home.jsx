
import {Hero, Features, About, MarqueeComp, Featured, Ingredients, Social, Stores, Newsletter, Footer} from '../../containers';

function Home() {
  return (
    <div className="Home">
      <Hero/>
      <Features/>
      <About/>
      <MarqueeComp/>
      <Featured/>
      <Ingredients/>
      <Social/>
      <Stores/>
      <Newsletter/>
    </div>
  );
}

export default Home;
