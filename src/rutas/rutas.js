import Eventos from "paginas/Eventos";
import Mantenimientos from "paginas/Mantenimientos";
import Salidas from "paginas/Salidas";
import Calendario from "paginas/Calendario";
import Error from "paginas/Error";
import Inicio from "paginas/Inicio";
import LayoutBasico from "layout/LayoutBasico";

export const rutas = [
    {
        path: "/",
        layout: LayoutBasico,
        component: Inicio,
        exact: true
    },
    {
        path: "/eventos",
        layout: LayoutBasico,
        component: Eventos,
        exact: true
    },
    {
        path: "/mantenimientos",
        layout: LayoutBasico,
        component: Mantenimientos,
        exact: true,
    },
    {
        path: "/salidas",
        layout: LayoutBasico,
        component: Salidas,
        exact: true
    },
    {
        path: "/calendario",
        layout: LayoutBasico,
        component: Calendario,
        exact: true
    },
    {
        path: "*",
        layout: LayoutBasico,
        component: Error,
        exact: true
    }

]