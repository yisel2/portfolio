type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default async function ServerUserList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <ul className="space-y-3">
      {users.map((user) => (
        <li
          key={user.id}
          className="rounded-lg border border-line px-4 py-3 font-sans text-sm"
        >
          <p className="font-medium text-ink">{user.name}</p>
          <p className="mt-0.5 font-mono text-xs text-ink-muted">{user.email}</p>
          <p className="mt-0.5 text-xs text-ink-faint">{user.company.name}</p>
        </li>
      ))}
    </ul>
  );
}
