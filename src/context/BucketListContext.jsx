import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const BucketListContext = createContext(null);

export const BucketListProvider = ({ children }) => {
  const [bucketList, setBucketList] = useLocalStorage('wl_bucketlist', []);
  const [visited, setVisited] = useLocalStorage('wl_visited', []);

  const addToBucketList = (country) => {
    if (!bucketList.find((c) => c.cca3 === country.cca3)) {
      setBucketList((prev) => [...prev, country]);
    }
  };

  const markVisited = (country) => {
    if (!visited.find((c) => c.cca3 === country.cca3)) {
      setVisited((prev) => [...prev, country]);
    }
    removeFromBucketList(country.cca3);
  };

  const removeFromBucketList = (cca3) => {
    setBucketList((prev) => prev.filter((c) => c.cca3 !== cca3));
  };

  const removeFromVisited = (cca3) => {
    setVisited((prev) => prev.filter((c) => c.cca3 !== cca3));
  };

  const isInBucketList = (cca3) => bucketList.some((c) => c.cca3 === cca3);
  const isVisited = (cca3) => visited.some((c) => c.cca3 === cca3);

  return (
    <BucketListContext.Provider
      value={{
        bucketList,
        visited,
        addToBucketList,
        markVisited,
        removeFromBucketList,
        removeFromVisited,
        isInBucketList,
        isVisited,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export const useBucketList = () => {
  const ctx = useContext(BucketListContext);
  if (!ctx) throw new Error('useBucketList must be used within BucketListProvider');
  return ctx;
};
