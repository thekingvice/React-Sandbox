import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ScrollAnimationSandbox() {
  return (
    <div>
      <section className="sectionAnimated">
        <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>
      </section>
      <section className="sectionAnimated">
        <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>
      </section>
      <section className="sectionAnimated">
        <ScrollAnimation className="animated" animateIn="fadeIn">
          Some Text
        </ScrollAnimation>
      </section>
    </div>
  );
}
