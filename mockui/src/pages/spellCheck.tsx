import { useState, useEffect } from 'react';
import axios from 'axios';

interface MyData {
  invalidWords: String
}

function spellCheck() {
  const [myData, setMyData] = useState<MyData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<MyData[]>('http://localhost:5001/template/spellCheck');
        const { data } = response;
        setMyData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {myData.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default spellCheck



