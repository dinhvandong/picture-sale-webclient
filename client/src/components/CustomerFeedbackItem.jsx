import { FaStar } from "react-icons/fa";
const CustomerFeedbackItem = ({ title, image }) => (
    <div className="bg-white p-4 shadow-md rounded-lg">

       
        <img src={image} alt={title} className="w-full h-auto  mb-4 rounded-lg" />
        <div className="flex justify-center mb-4">
            <FaStar className="text-header_color w-5 h-5 ml-2"/>
            <FaStar className="text-header_color w-5 h-5 ml-2"/>
            <FaStar className="text-header_color w-5 h-5 ml-2"/>
            <FaStar className="text-header_color w-5 h-5 ml-2"/>
            <FaStar className="text-header_color w-5 h-5 ml-2"/>

        </div>
        
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p>Hi Ha,</p>
        <p>Our painting came back today. We are very happy with it. It brings a lot of colors and vibrancy to the room. Hope you are well.</p>
        <p> All the best, Robbie</p>

    </div>
);
export default CustomerFeedbackItem