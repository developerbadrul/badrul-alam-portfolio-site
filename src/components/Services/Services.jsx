
import Title from "../Title/Title";

const Services = () => {
    return (
        <div id="services">
            <Title>Services</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="card w-96 bg-base-100 shadow-xl outline-pink-500">
                    <figure><img src="https://images.unsplash.com/photo-1578496479939-722d9dd1cc5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Management System</h2>
                        <p>Efficiently streamline your organizational processes with our comprehensive management solutions. From user authentication to data management and reporting, we provide robust tools to enhance productivity and decision-making</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl outline-pink-500">
                    <figure><img src="https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ecommerce Solutions</h2>
                        <p>Elevate your online business with our tailored ecommerce services. We offer end-to-end solutions, from secure user authentication to seamless transaction processing, ensuring a user-friendly and reliable shopping experience for your customers.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl outline-pink-500">
                    <figure><img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">UI Design Expertise</h2>
                        <p>Transform your digital presence with our cutting-edge UI design services. Our team specializes in creating intuitive and visually stunning user interfaces that enhance user engagement and deliver an exceptional online experience for your audience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;