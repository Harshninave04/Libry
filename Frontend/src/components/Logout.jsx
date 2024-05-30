import toast from 'react-hot-toast';
import { useAuth } from '../Context/AuthProvider';

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem('Users');
      toast.success('Logout successfully');

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error('Error: ' + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <a
        className="btn text-black hover:bg-slate-700 px-4 text-base border-none bg-gradient-to-r from-rose-400 to-red-500 dark:bg-red-200 dark:text-black"
        onClick={handleLogout}>
        Logout
      </a>
    </div>
  );
}

export default Logout;
