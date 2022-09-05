import Login from '../pages/auth/Login';
import { useSelector } from '../redux/store';

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}
