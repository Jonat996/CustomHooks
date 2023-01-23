import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [Sate, setSate] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setSate({
      ...Sate,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();

    setSate({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: !!Sate.data&&Sate.data[0],
    isLoading: Sate.isLoading,
    hasError: Sate.hasError,    
  };
};
