const ArtistItem = ({ title, image }) => (
    <div className="bg-white  shadow-md ">
      <img src={image} alt={title} className="w-full h-[300px] object-cover mb-1 " />
      <h3 className="text-lg text-center font-semibold text-gray-800">{title}</h3>
    </div>
  );
  export default ArtistItem;