import { Button } from "keep-react";
import Badrul from "../../assets/hero-pic.png"
import { IoIosPaper } from "react-icons/io";
import resumePDF from '../../assets/Resume of Badrul Alam.pdf'
const Hero = () => {
    const handleDownload = () => {
        // Triggering the download
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Resume of Badrul Alam.pdf'; // You can set the downloaded file name
        link.click();
    };
    return (
        <div id="hero" className="bg-[#12141c] md:mt-16 h-screen">
            <div className="flex flex-col md:flex-row gap-1 items-center mx-auto w-11/12">
                <div id="left">
                    <h1 className="text-4xl md:text-8xl text-white font-bold">Md Badrul Alam</h1>
                    <h3 className="text-4xl text-white overline my-3 font-semibold">Junior Web Developer</h3>
                    <div className="flex gap-1 text-[#e51681] text-2xl">
                        <div className="p-2">Frontend Developer</div>
                        <div className="border-l-4 p-2">Backend Developer</div>
                    </div>

                    <Button className="font-semibold bg-[#e51681] text-white"  size="md" onClick={handleDownload}>
                        Resume
                        <span className="pl-2">
                            <IoIosPaper size={24} />
                        </span>
                    </Button>

                </div>
                <div id="right">
                    <img className="w-6/12 md:w-8/12 mx-auto" src={Badrul} alt="Md Badrul Alam" />
                </div>
            </div>
        </div>
    );
};

export default Hero;