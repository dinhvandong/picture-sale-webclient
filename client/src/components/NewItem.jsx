const NewItem = ({ title, image }) => (
    <div className="bg-white p-1 shadow-md rounded-lg">
      <img src={image} alt={title} className="w-full h-[200px] object-cover mb-2 rounded-lg" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
  export default NewItem;