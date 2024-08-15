import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  gsap.registerPlugin(useGSAP);
  let abrusu = "ABRUSU";
  let collins = "COLLINS";
  let frontend = "FRONTEND";
  let engineer = "ENGINEER";

  const splitter = (word) => {
    return word.split("").map((letter, i) => <span key={i}>{letter}</span>);
  };

  const img_container_bottom = useRef(null);
  const img_container_top = useRef(null);
  const namework = useRef(null);
  useGSAP(() => {
    const spans = gsap.utils.toArray(".span_container span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: namework.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: false,
        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(img_container_bottom.current, {
      x: 0,
      y: 0,
      delay: 2,
      ease: "expo.inOut",
      duration: 1,
    })
      .to(
        img_container_top.current,
        {
          x: 0,
          ease: "expo.inOut",
          duration: 1,
        },
        "-=1"
      )
      .to(spans, {
        y: 0,
        stagger: 0.02,
        ease: "expo.inOut",
        duration: 1,
      });
  });
  return (
    <div>
      <div className="name_and_work" ref={namework}>
        <div className="name_and_me">
          <div className="name">
            <p>
              <span className="span_container">{splitter(collins)}</span>
            </p>
            <p>
              <span className="span_container">{splitter(abrusu)}</span>
            </p>
          </div>
          <div
            className="img_container img_container_top"
            ref={img_container_top}
          ></div>
        </div>

        <div className="work_and_me">
          <div
            className="img_container img_container2 img_container_bottom"
            ref={img_container_bottom}
          ></div>
          <div className="work">
            <p>
              <span className="span_container">{splitter(frontend)}</span>
            </p>
            <p>
              <span className="span_container">{splitter(engineer)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
