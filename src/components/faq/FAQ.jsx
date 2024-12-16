import React from "react";

import FAQblocks from "./FAQblocks";
import faq from "../../images/vector-faq.svg";

const FAQ = () => {
  return (
    <div className="w-full mb-[183px] relative">
      <div className="w-[80%] z-10 mx-auto flex flex-col items-center justify-center">
        <div className="w-full mb-[86px] flex items-center justify-center">
          <p className="text-[50px] font-[poppins-semibold] ">FAQ's</p>
        </div>

        <div className="w-[50%] flex flex-col items-baseline justify-start gap-4">

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />

          <FAQblocks
            head={"Lorem ipsum dolor sit amet consectetur."}
            def={
              "Lorem ipsum dolor sit amet consectetur. Quam placerat viverra phasellus lorem viverra massa purus platea. Integer fermentum mauris neque viverra vitae tortor gravida. Elit sollicitudin tortor in ut in massa curabitur nunc."
            }
          />
        </div>
      </div>

      <img src={faq} alt="faq" className="absolute top-0 left-0 -z-10" />
    </div>
  );
};

export default FAQ;
