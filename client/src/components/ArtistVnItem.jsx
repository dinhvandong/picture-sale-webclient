const ArtistVnItem = ({ title, image }) => (
    <div className="bg-[#27242D] p-4 shadow-md text-white ">
      <img src={image} alt={title} className="w-32 h-32  mb-4 rounded-full" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );

export default ArtistVnItem