import React from 'react';
import './ImageGrid.css'; 

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCivxaSHlAcA2w_-sXEeEX8RarAFatoxnCow&s',
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1709242330-one-size-by-patrick-starrr-ultimate-blurring-setting-powder-sweet-honey-65e0f7d117df6.jpg?crop=1xw:1xh;center,top&resize=980:*',
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716397233-1713303899-elf-power-grip-primer-661ef12bec3fe.png?crop=1xw:1.00xh;center,top&resize=980:*',
  'https://assets.vogue.com/photos/62f6a408b2e176a484ef7c6a/3:4/w_748%2Cc_limit/slide_15.jpg',
  'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494273773/trgySzkTkT-000000000494273773_1.png',
  'https://lfactorcosmetics.com/cdn/shop/articles/Essential_makeup_products.jpg?v=1701681592',
  'https://s2.r29static.com/bin/entry/44e/720x1080,85/1783544/image.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfpy2LDVqCIHSXTQJDm3QRWtbJ4-Hnph_Aw&s',
  'https://plumgoodness.com/cdn/shop/files/a3ff47_6a60a5ded8c0432f9689a91d430c1ac7_mv2_1024x1024.progressive.jpg?v=1693489814',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGu_H5DcW8ODe_WLTdZERby2xYjZhF_jLYnA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhZMSZvHblB-p47EwX0JV1IsBYuMQvN7qDg&s',
  'https://images.pexels.com/photos/3800060/pexels-photo-3800060.jpeg?cs=srgb&dl=pexels-freestockpro-3800060.jpg&fm=jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8qx3D6g1nHpmKPYD0z7Bf0R937tzH6oTQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBs6ecR3X1-IuyL4bKXtLS2GfKhl88zhK_w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_KAt_Lh2n-_5dEZtY0Y9IWwUI9g2L6WANQ&s',
  
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
