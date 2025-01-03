import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ArtistItem from './ArtistItem';
import { LanguageContext } from '../LanguageContext';

const ArtistCollection = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext); // Get the current language from context

  // Fetch data from API
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.post("http://localhost:8081/api/artist/findAll"); // Replace with your API endpoint
        if (response.data.success === 200) {
          setArtists(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color">
      <div className="flex flex-row items-center w-full h-auto">
        <div className="w-[40%] h-[1px] ml-5 bg-white"></div>
        <p className="text-center text-white font-bold ml-5 mr-5 text-[40px]">
          EXPLORING THE EXQUISITE ARTIST COLLECTION
        </p>
        <div className="w-[40%] h-[1px] mr-5 bg-white"></div>
      </div>

      <div className="w-full h-auto">
        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <ArtistItem
                key={artist.id}
                title={artist.name[language]} // Pass the English name
                image={artist.avatar} // Pass the avatar URL
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center w-full mt-5">
        <div className="flex w-[200px] items-center justify-center px-5 py-3 bg-brown_color">
          <p className="font-bold text-white">Full Collection</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCollection;
