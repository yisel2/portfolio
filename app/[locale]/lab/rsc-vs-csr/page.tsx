import ServerUserList from "../../../components/lab/ServerUserList";
import ClientUserList from "../../../components/lab/ClientUserList";

export default function RscVsCsrPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
      <h1 className="font-sans text-3xl font-medium leading-tight sm:text-4xl">
        Server Components vs Client Components — demo de data fetching
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
        Esta página es una demo intencional (no está enlazada desde ningún
        lado del sitio) para mostrar, con una API pública real, la diferencia
        entre traer datos en un Server Component y traerlos en un Client
        Component con <code className="font-mono text-sm">useEffect</code>.
        Ambos bloques piden los mismos datos a{" "}
        <code className="font-mono text-sm">jsonplaceholder.typicode.com/users</code>.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-sans text-lg font-medium">
            Server Component (fetch en el servidor)
          </h2>
          <p className="mt-2 font-sans text-sm text-ink-muted">
            Este HTML ya viene con los datos — probá &quot;Ver código fuente
            de la página&quot; (Ctrl+U) y vas a encontrar los nombres ahí.
          </p>
          <div className="mt-5">
            <ServerUserList />
          </div>
        </div>

        <div>
          <h2 className="font-sans text-lg font-medium">
            Client Component (useEffect)
          </h2>
          <p className="mt-2 font-sans text-sm text-ink-muted">
            Este contenido aparece después de que el JS se ejecuta en tu
            navegador — en &quot;Ver código fuente&quot; vas a ver un
            placeholder, no los datos.
          </p>
          <div className="mt-5">
            <ClientUserList />
          </div>
        </div>
      </div>
    </main>
  );
}
