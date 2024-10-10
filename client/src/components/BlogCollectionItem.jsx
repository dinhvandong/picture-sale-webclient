const BlogCollectionItem = ({ title, image }) => (
    <div className="bg-white  shadow-md rounded-lg">
      <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );

export default BlogCollectionItem