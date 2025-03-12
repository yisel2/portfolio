import Logo from "../components/logo";
import Card from "../components/card";
import Typography from "../components/typography";
import Divider from "../components/divider";
import Link from "next/link";
import Button from "../components/button";
import ArrowLeft from "../components/icons/arrow-left";

export default function HenryPage() {
  return (
    <>
      <div className="grid lg:grid-cols-6 gap-4 grid-cols-1">
        <div className="lg:col-span-1">
          <Logo />
        </div>
        <div className="lg:col-span-5 ">
          <Card className="flex-grow flex-row gap-4 items-center">
            <Link href="/" className="flex items-center">
              <Button type="no-styles">
                <ArrowLeft />
              </Button>
            </Link>
            <Typography variant="h1">Henry - Frontend Developer</Typography>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <Card className="">
            <div className="flex flex-col gap-2">
              <Typography variant="h1">Sobre Henry</Typography>
              <p>
                En Henry, somos la academia de tecnología líder en
                Latinoamérica, dedicada a capacitar a personas y equipos para
                enfrentar el futuro del trabajo.
                <br />
                <br />
                <Link href="https://www.soyhenry.com/" target="_blank">
                  <span className="text-deepseek-blue">www.soyhenry.com</span>
                </Link>
              </p>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-5">
          <Card className="flex-grow">
            <div className="flex flex-col xl:flex-row gap-12 mt-2 justify-between items-center">
              <div className="flex flex-col gap-2 xl:w-[50%]">
                <Typography variant="h1">Responsabilidades</Typography>
                <p>Mis principales responsabilidades fueron: </p>
                <p>
                  ✔️ Responsable de la implementación y mantenimiento de
                  funcionalidades clave en la aplicación de Henry, utilizando
                  tecnologías como{" "}
                  <strong>
                    React, Next, TypeScript, MDBootstrap, Ant Design, Formik,
                    React Final Form, Axios y SWR
                  </strong>
                  .
                </p>
                <p>
                  ✔️ <strong>Desarrollo de pruebas automatizadas</strong> con{" "}
                  <strong>React Testing Library</strong> para garantizar la
                  calidad del código y la estabilidad de las funcionalidades
                  implementadas.
                </p>
                <p>
                  ✔️ Colaboración estrecha con el equipo de backend para
                  planificar modelos de datos y con el equipo de diseño para
                  garantizar una experiencia de usuario coherente y atractiva.
                </p>
                <p>
                  ✔️ Participación en el desarrollo desde cero de la{" "}
                  <strong>librería de componentes de Henry</strong>, empleando{" "}
                  <strong>Storybook, React y CSS Modules</strong>, asegurando
                  consistencia, escalabilidad y reutilización en todas las
                  aplicaciones de la compañía.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <img
                  src="/henry/home.png"
                  alt="henry-1"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <Divider className="my-12" />
            <div className="flex flex-col gap-12 mt-6 justify-between items-center">
              <div className="flex flex-col gap-2">
                <Typography variant="h1">Principales desafíos</Typography>
                <p>
                  En <strong>Henry</strong>, trabajé en el desarrollo de su
                  ecosistema digital, participando en proyectos clave que
                  impactaron tanto en la experiencia de los estudiantes como en
                  la automatización de procesos internos.
                </p>
                <p>
                  ✔️ <strong>Creación de Componentes Reutilizables</strong>
                  <br />
                  Participé en el desarrollo de una librería de componentes
                  reutilizables, diseñados para ser responsivos y compatibles
                  con modo oscuro y claro.
                </p>
                <p className="ml-4">
                  ✅ Se crearon utilizando{" "}
                  <strong>React, CSS Modules y Storybook</strong>, asegurando
                  una documentación clara y facilidad de uso.
                </p>
                <p className="ml-4">
                  ✅ Cada componente fue probado con React Testing Library,
                  incluyendo tests unitarios y snapshots para garantizar
                  estabilidad y consistencia.
                </p>
                <p className="ml-4">
                  ✅ Estos componentes fueron fundamentales en la construcción
                  de la nueva plataforma de Henry.
                </p>

                <Link
                  href="https://main.d1egxepi2g2pdh.amplifyapp.com/?path=/docs/atoms-button--docs"
                  target="_blank"
                  className="w-fit ml-4"
                >
                  <span className="text-deepseek-blue">
                    🔗 Link al storybook
                  </span>
                </Link>
                <p>
                  ✔️{" "}
                  <strong>
                    Desarrollo en la Aplicación Principal (&quot;School&quot;)
                  </strong>
                  <br />
                  Durante mis primeros meses en Henry, trabajé en School, la
                  plataforma central para estudiantes e instructores, donde los
                  alumnos podían acceder a clases grabadas y los instructores
                  gestionar asistencias y contenido.
                </p>
                <p className="ml-4">
                  ✅ <strong>Tecnologías utilizadas</strong>: React, CSS Modules
                  y SWR para la gestión eficiente de peticiones.
                </p>
                <p className="ml-4">
                  ✅ Con el tiempo, Henry decidió transformar esta plataforma en
                  su producto principal, por lo que participé en su
                  reconstrucción <strong>desde cero</strong>, utilizando{" "}
                  <strong>Next.js</strong> para mejorar la performance.
                </p>
                <p className="ml-4">
                  ✅ Durante esta etapa, trabajé con{" "}
                  <strong>contratistas externos</strong>, adaptándome a nuevas
                  dinámicas de equipo y colaboración con desarrolladores fuera
                  de la empresa.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/henry/home-dark.png"
                  alt="henry-2"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <Divider className="my-12" />
            <div className="flex flex-col gap-12 mt-6 justify-between items-center">
              <div className="flex flex-col gap-2">
                <p>
                  ✔️{" "}
                  <strong>
                    Desarrollo del Onboarding Automatizado para Nuevos
                    Estudiantes
                  </strong>
                  <br />
                  Uno de mis mayores desafíos y logros en Henry fue desarrollar{" "}
                  <strong>desde cero</strong> el{" "}
                  <strong>
                    proceso de Onboarding para potenciales alumnos (leads)
                  </strong>
                  , logrando una automatización que redujo significativamente la
                  carga operativa del equipo encargado de las inscripciones.
                </p>
                <p className="ml-4">
                  ✅ <strong>Proceso en pasos (steps)</strong>: Implementé un
                  flujo dinámico donde los usuarios ingresaban datos personales,
                  laborales y conocimientos en programación para ser evaluados.
                </p>
                <p className="ml-4">
                  ✅ <strong>Formularios inteligentes</strong>: Utilicé{" "}
                  <strong>React Final Form</strong> para crear formularios
                  dinámicos y con los inputs personalizados de Henry.
                </p>
                <p className="ml-4">
                  ✅ <strong>Integración con ClassMarker</strong>: Implementé la
                  integración con esta plataforma de exámenes en conjunto con el
                  backend, lo que permitió:
                </p>
                <p className="ml-8">
                  ☑️ Registrar respuestas en tiempo real mediante{" "}
                  <strong>webhooks</strong>. <br />
                  ☑️ Monitorear el progreso y tiempo restante del test. <br />
                  ☑️ Validar automáticamente si el usuario aprobaba o no.
                </p>
                <p className="ml-4">
                  ✅ <strong>Verificación de identidad con Metamap</strong>: Se
                  implementó validación automática para confirmar la identidad
                  del usuario.
                </p>
                <p className="ml-4">
                  ✅ <strong>Firma digital y pagos integrados:</strong>
                </p>
                <p className="ml-8">
                  ☑️ Los usuarios firmaban digitalmente sus contratos mediante{" "}
                  <strong>DocuSign</strong>. <br />
                  ☑️ Se integró <strong>Rebill</strong> para gestionar pagos en
                  línea.
                </p>
                <p className="ml-4">
                  ✅ <strong>Resultado final</strong>: Una vez completado el
                  proceso, los usuarios eran convertidos automáticamente en{" "}
                  <strong>alumnos activos</strong>, accediendo directamente a
                  sus cursos adquiridos.
                </p>
                <p>
                  Este proyecto representó una mejora significativa en la
                  eficiencia del proceso de inscripción y fue clave en la
                  optimización de la conversión de leads en estudiantes.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <img
                  src="/henry/henry-pago.png"
                  alt="henry-2"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
