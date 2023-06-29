// import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";

export default function SmoothScroll() {
  return (
    <div>
      <span>
        <span className="link">
          <Link to="section1" smooth={true}>
            sec 1
          </Link>
        </span>
        <span className="link">
          <Link to="section2" smooth={true} duration={500}>
            sec 2
          </Link>
        </span>
        <span className="link">
          <Link to="section3">sec 3</Link>
        </span>
      </span>
      <section className="test-section">
        <Element name="section1">1</Element>
      </section>
      <section className="test-section">
        <Element name="section2">2</Element>
      </section>
      <section className="test-section">3</section>
    </div>
  );
}
