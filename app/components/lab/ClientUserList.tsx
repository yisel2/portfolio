"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function ClientUserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ul className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            className="rounded-lg border border-line px-4 py-3 font-sans text-sm text-ink-faint"
          >
            Cargando...
          </li>
        ))}
      </ul>
    );
  }

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
