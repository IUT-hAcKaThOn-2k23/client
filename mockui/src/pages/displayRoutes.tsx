import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
const imageBase64 = 'data:image/jpeg;base64,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';


type ImageData = {
  id: number,
  image: string;
};

const MyImage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState("False")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ImageData[]>('http://localhost:5001/template/displayRoutes');
        // console.log("this is response")
        // console.log(response.data)
        const data = await response.data
        const {image} = await data
        setImages(data)
        console.log(images)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {images.map((item) => (
          <li>
            <p>{item}</p>
            {/* <Image
          src={item.imageBase64}
          alt="My Base64-encoded Image"
          width={200}
          height={200}
        /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyImage;