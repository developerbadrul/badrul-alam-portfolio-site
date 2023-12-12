import { Progress } from "flowbite-react";
import { FaReact } from "react-icons/fa";
import Container from "../Container/Container";
import Title from "../Title/Title";

const About = () => {
    return (
        <div id="about" className="bg-[#12141c] p-3">
            <Container>
                <Title>About Me</Title>
                <p className="text-white text-justify">As a Junior Web Developer, I specialize in the MERN Stack, web design, and troubleshooting for optimal productivity. With a strong foundation in interface creation and MERN technologies, I bring valuable skills to contribute effectively in a dynamic web development environment. My focus is on delivering high-quality results and staying abreast of the latest industry trends to ensure continuous improvement. I am enthusiastic about the opportunity to bring my expertise to a new team and contribute to impactful projects.</p>
                <div className="my-5">
                    <h3 className="text-white text-2xl font-semibold my-3">Skills <span>:---</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <div className="text-lg text-white  font-medium dark:text-white flex items-center gap-2"> <span><FaReact /></span><span>React JS</span></div>
                            <Progress
                                color="pink"
                                progress={70}
                                progressLabelPosition="inside"
                                size="lg"
                                labelProgress
                                labelText
                            />
                        </div>
                        <div>
                            <div className="text-lg text-white  font-medium dark:text-white flex items-center gap-2"> <span><FaReact /></span><span>Next JS</span></div>
                            <Progress
                                color="pink"
                                progress={40}
                                progressLabelPosition="inside"
                                size="lg"
                                labelProgress
                                labelText
                            />
                        </div>
                        <div>
                            <div className="text-lg text-white  font-medium dark:text-white flex items-center gap-2"> <span><FaReact /></span><span>MongoDB</span></div>
                            <Progress
                                color="pink"
                                progress={60}
                                progressLabelPosition="inside"
                                size="lg"
                                labelProgress
                                labelText
                            />
                        </div>
                        <div>
                            <div className="text-lg text-white font-medium dark:text-white flex items-center gap-2"> <span><FaReact /></span><span>Express JS</span></div>
                            <Progress
                                color="pink"
                                progress={60}
                                progressLabelPosition="inside"
                                size="lg"
                                labelProgress
                                labelText
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;