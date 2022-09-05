import { Navigate } from 'react-router-dom';
import { useSelector } from '../redux/store';

export default function GuestGuard({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
}
