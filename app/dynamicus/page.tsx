import Logo from "../components/logo";
import Card from "../components/card";
import Typography from "../components/typography";
import AboutDynamicUs from "../components/dynamicus/about-dynamicus";
import Divider from "../components/divider";
import Link from "next/link";
import Button from "../components/button";
import ArrowLeft from "../components/icons/arrow-left";
// import DynamicusSwiper from "../components/dynamicus/dynamicus-swiper";

export default function DynamicUsPage() {
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
            <Typography variant="h1">
              DynamicUs - Frontend Developer - Freelance
            </Typography>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <AboutDynamicUs />
        </div>
        <div className="lg:col-span-5">
          <Card className="flex-grow ">
            <div className="flex flex-col xl:flex-row gap-12 mt-2 justify-between lg:items-center relative overflow-hidden">
              <div className="flex flex-col gap-2 xl:max-w-[50%] xl:pb-[50px] 2xl:pb-[100px]">
                <Typography variant="h1">Responsabilidades</Typography>
                <p>Mis principales responsabilidades fueron: </p>
                <p>
                  ✔️ Responsable del desarrollo completo del frontend en
                  múltiples aplicaciones web, utilizando tecnologías como{" "}
                  <strong>
                    Refine, React, TypeScript, Axios, Vite, Ant Design y Styled
                    Components
                  </strong>
                  , garantizando interfaces eficientes, escalables y de alto
                  rendimiento.
                </p>
                <p>
                  ✔️{" "}
                  <strong>
                    Colaboración constante con el equipo de backend
                  </strong>
                  , trabajando de forma estrecha con un compañero para definir
                  flujos de datos, modelos y arquitecturas que optimicen el
                  rendimiento y la experiencia del usuario.
                </p>
                <p>
                  ✔️{" "}
                  <strong>
                    Implementación de soluciones frontend desde cero
                  </strong>
                  , incluyendo el diseño de estructuras modulares y
                  reutilizables, lo que redujo los tiempos de desarrollo y
                  facilitó la incorporación de nuevas funcionalidades.
                </p>
                <p>
                  ✔️ <strong>Optimización de procesos de desarrollo</strong>{" "}
                  mediante el uso de <strong>Vite</strong> para mejorar la
                  velocidad de compilación y <strong>Refine</strong> para
                  acelerar la construcción de aplicaciones empresariales.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="xl:absolute top-[5%] right-[-450px]">
                  <img
                    src="/dynamicus/calp/calp-inicio-dark.png"
                    alt="calp-1"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            <Divider className="mt-8" />
            <div className="flex flex-col gap-12 mt-6 justify-between lg:items-center">
              <div className="flex flex-col gap-2">
                <Typography variant="h1">En detalle</Typography>
                <p>
                  En <strong>DynamicUs</strong>, trabajé en la creación y
                  mantenimiento de aplicaciones a pedido de los clientes. Uno de
                  los proyectos más desafiantes fue el{" "}
                  <strong>
                    sistema de gestión de matrículas de abogados para el Colegio
                    de Abogados de La Plata (CALP)
                  </strong>
                  .
                </p>
                <p>
                  Inicialmente, el equipo estaba compuesto por{" "}
                  <strong>
                    tres frontend developers y un backend developer
                  </strong>
                  , pero con el tiempo quedé como la{" "}
                  <strong>única responsable del frontend</strong>. Mis
                  principales tareas fueron:
                </p>
                <p>
                  ✔️ <strong>Diseño y desarrollo de interfaces</strong>:
                  Creación de componentes reutilizables para optimizar el
                  desarrollo y facilitar futuras modificaciones.
                </p>
                <p>
                  ✔️ <strong>Implementación de Refine y Strapi</strong>: Utilicé{" "}
                  <strong>Refine</strong> en conjunto con{" "}
                  <strong>Strapi (backend)</strong> para estructurar un sistema{" "}
                  <strong>CRUD eficiente</strong>, lo que permitió automatizar
                  el manejo de datos según las rutas definidas.
                  <br />
                  Por ejemplo, una consulta a <em>calp.com/usuarios</em>{" "}
                  realizaba automáticamente el fetch de la base de datos de
                  usuarios, simplificando la creación de interfaces tipo ABM
                  (Alta, Baja y Modificación).
                </p>
                <p>
                  ✔️ <strong>Fetchs personalizados</strong>: En los casos donde
                  la lógica de negocio requería mayor flexibilidad, utilicé{" "}
                  <strong>useCustom</strong>y <strong>useCustomMutation</strong>{" "}
                  de Refine para realizar peticiones a medida.
                </p>
                <p>
                  ✔️ <strong>Optimización de filtros</strong>: Gracias a la
                  integración con Strapi,{" "}
                  <strong>aproveché parámetros de query automatizados</strong>{" "}
                  para gestionar filtrados de datos sin necesidad de procesarlos
                  manualmente en el frontend o backend, lo que mejoró la
                  eficiencia del sistema.
                </p>
              </div>
              <img
                src="/dynamicus/calp/calp-matricula1.png"
                alt="calp-2"
                className="rounded-lg shadow-md"
              />
            </div>
            <Divider className="mt-8" />
            {/* TODO: agregar capturas al carrusel */}
            {/* <div className="flex flex-col gap-12 mt-6 justify-between items-center">
            <Typography variant="h1">Capturas</Typography>
            <DynamicusSwiper />
          </div> */}
          </Card>
        </div>
      </div>
    </>
  );
}
