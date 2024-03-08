import useAuthStore from '../../store/auth.store';

export default function Dashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div>
      <h1>Dashboard</h1>

      <img src={user.avatarUrl} alt={user.username} />
      <h2>Welcome, {user.username}</h2>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
