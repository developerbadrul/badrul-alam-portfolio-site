import { Button, Label, TextInput, Textarea } from "flowbite-react";
import Container from "../Container/Container";
import Title from "../Title/Title";
import { IoIosMailUnread } from "react-icons/io";
import { IoCallSharp, IoMail, IoPersonOutline } from "react-icons/io5";




const Contact = () => {
    return (
        <div id="contact" className="bg-[#12141c] p-3">
            <Container>
                <Title>Contact With Me</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="email5" value="Your Name" />
                            </div>
                            <TextInput id="email5" type="email" icon={IoPersonOutline} placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="email4" value="Your email" />
                            </div>
                            <TextInput id="email4" type="email" icon={IoIosMailUnread} placeholder="Your Email" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" />
                            </div>
                            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                        </div>
                        <Button className="my-3" color="success">Message Send</Button>
                    </div>
                    <div className="text-white text-2xl">
                        <div className="flex items-center gap-2 my-5">
                            <span><IoMail /></span>
                            <a href="mailto:developer.badrul">developer.badrul@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span><IoCallSharp /></span>
                            <a href="tel: +8801516781817">+880 151 678 1817</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;