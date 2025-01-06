const NewItem = ({ title, image }) => (
    <div className="bg-white">
      <img src={image} alt={title} className="hover:cursor-pointer w-full h-[200px]" />
      <h3 className="text-lg text-center font-semibold text-gray-800">{title}</h3>
    </div>
  );
  export default NewItem;