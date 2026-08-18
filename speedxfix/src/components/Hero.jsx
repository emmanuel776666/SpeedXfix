// this is the code for the Hero component in a React application. The Hero component displays a prominent call-to-action section with a headline and description.
import TrustFeatures from "./TrustFeatures";
function Hero() {
  return (
    <section className="hero-content">

      <div className="hero-text">

        <h1>
          Get any job
          <br />
          done, <span>fast.</span>
        </h1>

        <p>
          Find trusted professionals for
          <br />
          plumbing, electrical, cleaning,
          <br />
          repairs, and more.
        </p>

<TrustFeatures />
      </div>

    </section>
  );
}

export default Hero;