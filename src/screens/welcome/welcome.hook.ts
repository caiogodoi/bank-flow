import { useNavigation } from '@react-navigation/native';

export interface UseWelcome {
  navigateToDashboard: () => void;
}

function useWelcome(): UseWelcome {
  const { navigate } = useNavigation();

  function navigateToDashboard() {
    navigate('Dashboard');
  };

  return { navigateToDashboard }
}

export default useWelcome;