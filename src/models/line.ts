import { useCallback, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const getData = useCallback(() => asyncFetch(), []);

  return { data, getData };
};
