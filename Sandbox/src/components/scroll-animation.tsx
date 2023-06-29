import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ScrollAnimationSandbox() {
  return (
    <div>
      <section className="sectionAnimated">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          Some Text
        </ScrollAnimation>
      </section>
      <section className="sectionAnimated">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          Some Text
        </ScrollAnimation>
      </section>
      <section className="sectionAnimated">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          Some Text
        </ScrollAnimation>
      </section>
    </div>
  );
}
