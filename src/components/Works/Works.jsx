import { Card } from "flowbite-react";
import Title from "../Title/Title";
import { CgWebsite } from "react-icons/cg";

const Works = () => {
    return (
        <div id="works">
            <Title>My Projects</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Card className="max-w-sm" imgSrc="https://i.ibb.co/P5rFNLM/Screenshot-2.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Travel Blog Site
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Embark on a journey of exploration and discovery with our Travel Blog Site. Immerse yourself in captivating travel narratives, breathtaking visuals, and expertly curated tips.
                    </p>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-semibold"><CgWebsite />
                            </span>
                            <a href="https://travelinfo.com.bd" target="_blank" className="text-blue-500 font-semibold">View This Project</a>
                        </div>
                    </div>
                </Card>
                <Card className="max-w-sm" imgSrc="https://i.ibb.co/FJ5wMdk/Screenshot-3.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Pacific Furniture
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        From sophisticated living room sets to ergonomic office solutions, Pacific Furniture is your destination for tastefully curated furnishings that seamlessly blend comfort and style.
                    </p>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-semibold"><CgWebsite />
                            </span>
                            <a href="https://pacificfurniture.au" target="_blank" className="text-blue-500 font-semibold">View This Project</a>
                        </div>
                    </div>
                </Card>
                <Card className="max-w-sm" imgSrc="https://i.ibb.co/vYyv6d1/Screenshot-4.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        SnapArt Studio
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Explore the SnapArt Studio project's client-side code to understand how we create and display 3D logos. Feel free to contribute, provide feedback, or report issues to help us improve the platform and deliver stunning 3D designs.
                    </p>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-semibold"><CgWebsite />
                            </span>
                            <a href="https://mern-stack-a17b3.web.app/" target="_blank" className="text-blue-600 font-semibold">View This Project</a>
                        </div>
                    </div>
                </Card>
                <Card className="max-w-sm" imgSrc="https://i.ibb.co/8Yv7xYy/Screenshot-5.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Omexo Education Center
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Dynamic Content with React: Your web application leverages the power of React, a popular JavaScript library, to create dynamic and interactive user interfaces. React allows for the efficient rendering of components, enabling a seamless and responsive user experience.
                    </p>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-semibold"><CgWebsite />
                            </span>
                            <a href="https://allyshop-96cc6.web.app" target="_blank" className="text-blue-500 font-semibold">View This Project</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Works;