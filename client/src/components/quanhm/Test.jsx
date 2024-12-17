import React from 'react'
import ArtistVnItem from './ArtistVnItem';

const Test = () => {

  // Sample Data
  const items = [
      { id: 1, artwork:"24 ARTWORKS", title: "AN DANG", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-an-dang.jpg" },
      { id: 2, artwork:"24 ARTWORK", title: "Hoạ sỹ Quang Hùng", image: "https://www.nguyenartgallery.com/wp-content/uploads/bui-quang-luong-artist.jpg" },
      { id: 3, artwork:"24 ARTWORK", title: "Hoạ sỹ Lương Bằng ", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-chau-ai-van.jpg" },
      { id: 4, artwork:"24 ARTWORK", title: "Hoạ sỹ Việt Nguyễn", image: "https://www.nguyenartgallery.com/wp-content/uploads/chi-nguyen-famous-artist-in-vietnam.jpg" },
      { id: 5, artwork:"24 ARTWORK", title: "Hoạ sỹ Sỹ Tốt", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-chu-viet-cuong-1.jpg" },
      { id: 6, artwork:"24 ARTWORK", title: "Hoạ sỹ Việt Đức", image: "https://www.nguyenartgallery.com/wp-content/uploads/H%E1%BB%8Da-S%C4%A9-%C4%90%E1%BA%B7ng-%C4%90%C3%ACnh-Ng%E1%BB%A1-2.jpg" },
      { id: 7, artwork:"24 ARTWORK", title: "Hoạ sỹ Lương Siêu", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-dang-hien-1.jpg" },
      { id: 8, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-dang-hiep.jpg" },
      { id: 9, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/dang-huy-quyen-vietnamese-artists.jpg" },
      { id: 10, artwork:"24 ARTWORK", title: "Hoạ sỹ Quang Hùng", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-dang-vu-ha-1.jpg" },
      { id: 11, artwork:"24 ARTWORK", title: "Hoạ sỹ Lương Bằng ", image: "https://www.nguyenartgallery.com/wp-content/uploads/danh-cuong-famous-vietnamese-painters.jpg" },
      { id: 12, artwork:"24 ARTWORK", title: "Hoạ sỹ Việt Nguyễn", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-dao-anh-khanh.jpg" },
      { id: 13, artwork:"24 ARTWORK", title: "Hoạ sỹ Sỹ Tốt", image: "https://www.nguyenartgallery.com/wp-content/uploads/Artist-Dau-Quang-Anh-Nguyen-Art-Gallery.jpg" },
      { id: 14, artwork:"24 ARTWORK", title: "Hoạ sỹ Việt Đức", image: "https://www.nguyenartgallery.com/wp-content/uploads/dau-quang-toan.jpg" },
      { id: 15, artwork:"24 ARTWORK", title: "Hoạ sỹ Lương Siêu", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-dinh-dong.jpg" },
      { id: 16, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://www.nguyenartgallery.com/wp-content/uploads/woocommerce-placeholder-300x300.png" },
      { id: 17, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://www.nguyenartgallery.com/wp-content/uploads/Artist-Dinh-Thi-Thanh-Nguyen-Art-Gallery.jpg" },
      { id: 18, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://www.nguyenartgallery.com/wp-content/uploads/do-cong-son-vietnamese-artist.jpg" },
      { id: 19, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://www.nguyenartgallery.com/wp-content/uploads/artist-do-khai.jpg" },
      { id: 20, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 21, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 22, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 23, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 24, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 25, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 26, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 27, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 28, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 29, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 30, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 31, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 32, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 33, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 34, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 35, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 36, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 37, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 38, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 39, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 40, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 41, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 42, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 43, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 44, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 45, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 46, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 47, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 48, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 49, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 50, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 51, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 52, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 53, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 54, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 55, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 56, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 57, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 58, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 59, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 60, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 61, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 62, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 63, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 64, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 65, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 66, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 67, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 68, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 69, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 70, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 71, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 72, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 73, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 74, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 75, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 76, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 77, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 78, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 79, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 80, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 81, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 82, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 83, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 84, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 85, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 86, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 87, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 88, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 89, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 90, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 91, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 92, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 93, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 94, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 95, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 96, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 97, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 98, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 99, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 100, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 101, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 102, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 103, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 104, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 105, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 106, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 107, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
      { id: 108, artwork:"24 ARTWORK", title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    

  ];
  return (

      <div className='flex flex-col items-center justify-between w-full h-auto p-5 font-sans bg-[#27242E]'>
          <div className='flex flex-col justify-center items-center w-full h-auto'>

              <p className='text-center text-[#FFEF96] font-semibold ml-5 mr-5 text-[27px]'>Famous Vietnamese Artists and Their Artwork at Nguyen Art Gallery

              </p>

              <p className='text-center text-white text-[18px] font-normal font-sans mt-1'>
                  It is the great honor of Nguyen Art Gallery to collaborate with the most famous and talented artists in Vietnam. Over 1000 artworks by these artists have been showcased and  
              </p>
              <p className='text-center text-white text-[18px] font-normal font-sans'>
                 widespread to the audience over 18 years. Original masterpieces and elegant art space exactly define Nguyen Art Gallery.
              </p>


          </div>
          <div className='w-full h-auto mt-6'>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {items.map(item => (
                      <ArtistVnItem key={item.id} artwork={item.artwork} title={item.title} image={item.image} />
                  ))}
              </div>


          </div>

          
      </div>
  )
}

export default Test