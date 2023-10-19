import React from "react";
import Marquee from "react-fast-marquee";

const Placement = () => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl py-3 px-20">
        Companies where Students
        <span className="border-b-4 rounded-r-3xl pr-5  border-yellow-500">
          Cracked Placements
        </span>
      </h1>
      <Marquee pauseOnHover={true}>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://optimise2.assets-servd.host/dig-upsiide/production/images/amazz.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1651608199&s=3ab01624d5422d48b7fe598d28ddcbcc"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://cdn6.f-cdn.com/contestentries/1345716/25885967/5b1bf850245b6_thumb900.jpg"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2019-05-fedex-logo-min.jpg"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://inkbotdesign.com/wp-content/uploads/2012/09/Volkswagen-Logo-Design.png"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://inkbotdesign.com/wp-content/uploads/2012/09/Walmart-Logo-Design.webp"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/8-min-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://www.gblogodesign.co.uk/wp-content/uploads/2021/05/Rolex.png"
          />
        </div>
        <div>
          <img
            className="w-28 md:w-40"
            src="https://brandongaille.com/wp-content/uploads/2014/04/HP-Company-Logo.jpg"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Placement;
