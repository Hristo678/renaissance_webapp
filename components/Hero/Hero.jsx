
import styles from "@styles/style";
import { tobacco_cup, smoke3, smoke4 } from "@public/assets";
import './Hero.css';
import Image from "next/image";


const Hero = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pt-6`}>


          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[32px] lg:text=[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Renaissance</span>{" "}
            </h1>

          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            in the Tobacco Industry.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team is creating premium hookah tobacco.
            Using the highest quality of materials we are delivering
            the best product to our customers.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter}  relative`}>
          <Image src={tobacco_cup} alt="billing" className=" absolute z-[5]" />
          <Image id="smoke1" src={smoke3} alt="billing" className=" absolute z-[6]" />
          <Image id="smoke2" src={smoke4} alt="billing" className=" relative z-[4]" />



          {/* gradient start */}
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
          {/* gradient end */}
        </div>



      </section>
      <div>
        Products
      </div>
    </div>

  );
};

export default Hero;