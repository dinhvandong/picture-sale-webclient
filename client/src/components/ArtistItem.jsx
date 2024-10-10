const ArtistItem = ({ title, image }) => (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
  export default ArtistItem;