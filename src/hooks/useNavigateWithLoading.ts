import { useNavigate } from 'react-router-dom';
import { useAppContext } from 'src/state/app';

export const useNavigateWithLoading = () => {
  const navigate = useNavigate();
  const { setLoading } = useAppContext();

  const navigateWithLoading = (path: string) => {
    setLoading(true);
    
    // Delay 3 giây trước khi chuyển trang
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, 2000);
  };

  return navigateWithLoading;
}; 