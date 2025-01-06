import { FaStar } from "react-icons/fa";
const CustomerFeedbackItem = ({ title, image, comment }) => (
    <div className="p-4 bg-white rounded-lg shadow-md">

       
        <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
        <div className="flex justify-center mb-4">
            <FaStar className="w-5 h-5 ml-2 text-header_color"/>
            <FaStar className="w-5 h-5 ml-2 text-header_color"/>
            <FaStar className="w-5 h-5 ml-2 text-header_color"/>
            <FaStar className="w-5 h-5 ml-2 text-header_color"/>
            <FaStar className="w-5 h-5 ml-2 text-header_color"/>

        </div>

        
        
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p>{comment}</p>

    </div>
);
export default CustomerFeedbackItem