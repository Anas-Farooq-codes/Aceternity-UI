import { socialIcons } from "@/data"
import MagicButton from "./MagicButton"
import { ToolTip } from "./ToolTip"
import { FaLocationCrosshairs } from "react-icons/fa6"

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-48 pb-10" id="contact">
<div className="flex flex-col items-center">
    <h1 className="heading text-white lg:max-w-[45vw]">
        Ready to take <span className="text-purple">your</span> digital presence to the next level?
    </h1>
    <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach out to me today and let&apos;s discuss now I can help you achieve your goals.
    </p>

<ToolTip />

<a href="mailto:contact@anascodes2006@gmail.com">
    <MagicButton
    title="Let's get in touch"
    position="right"
    icon={<FaLocationCrosshairs/>}
    />
    
</a>

</div>

<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
<p className="text-white text-sm font-light text-center md:text-left">
          Copyright © {currentYear}{" "}
          <a href="https://www.linkedin.com/in/anas-farooq06/" className="text-purple">
            Anas Codes
          </a>
        </p>
<div className="flex items-center md:gap-3 gap-6 mt-5 sm:mt-0">
    {
        socialIcons.map((info) => (
            <div key={info.id}>
                <a href={info.link} target="blank"><img src={info.img} alt="icons" className=" w-[30px] md:w-10" /></a>
            </div>
        ))
    }

</div>
</div>
    </footer>
  )
}

export default Footer