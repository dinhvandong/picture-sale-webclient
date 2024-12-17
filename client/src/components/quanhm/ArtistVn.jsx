import React from 'react'
import ArtistVnItem from './ArtistVnItem';

const ArtistVn = () => {

    // Sample Data
    const items = [
        { id: 1, title: "Hoạ sỹ Đỗ Khải", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 2, title: "Hoạ sỹ Quang Hùng", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 3, title: "Hoạ sỹ Lương Bằng ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 4, title: "Hoạ sỹ Việt Nguyễn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 5, title: "Hoạ sỹ Sỹ Tốt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 6, title: "Hoạ sỹ Việt Đức", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 7, title: "Hoạ sỹ Lương Siêu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 8, title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 9, title: "Hoạ sỹ Đỗ Khải", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 10, title: "Hoạ sỹ Quang Hùng", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 11, title: "Hoạ sỹ Lương Bằng ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 12, title: "Hoạ sỹ Việt Nguyễn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 13, title: "Hoạ sỹ Sỹ Tốt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 14, title: "Hoạ sỹ Việt Đức", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 15, title: "Hoạ sỹ Lương Siêu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
        { id: 16, title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },

    ];
    return (

        <div className='flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color'>
            <div className='flex flex-col items-center w-full h-auto'>

                <p className='text-center text-white font-bold ml-5 mr-5 text-[20px]'>Famous Vietnamese Artists and Their Artwork at Nguyen Art Gallery

                </p>

                <p>
                    It is the great honor of Nguyen Art Gallery to collaborate with the most famous and talented artists in Vietnam. Over 1000 artworks by these artists have been showcased and widespread to the audience over 18 years. Original masterpieces and elegant art space exactly define Nguyen Art Gallery.
                </p>

            </div>
            <div className='w-full h-auto'>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {items.map(item => (
                        <ArtistVnItem key={item.id} title={item.title} image={item.image} />
                    ))}
                </div>


            </div>

            <div className='flex items-center justify-center w-full mt-5'>
                <div className='flex  w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
                    <p className='font-bold text-white'>Full Collection</p>

                </div>
            </div>
        </div>
    )
}


export default ArtistVn