import { useEffect } from 'react';
import { useAppContext } from 'src/state/app';

export const useLoading = (isLoading: boolean) => {
  const { setLoading } = useAppContext();

  useEffect(() => {
    setLoading(isLoading);
    return () => {
      setLoading(false);
    };
  }, [isLoading, setLoading]);
}; 