import React from "react";
import { Link, useLocation } from "react-router-dom";
import {Icon} from "semantic-ui-react";
import {NavStyles} from "./styles";

export default function Nav() {
    let location = useLocation();
    console.log(location);

    return (
        <NavStyles>
            <ul>
                <li className={location.pathname === "/" && "selected"}>
                    <Link to="/"><Icon name="home" color="red" size="small" />Inicio</Link>
                </li>
                <li className={location.pathname === "/eventos" && "selected"}>
                    <Link to="/eventos"> <Icon name="map" color="red" size="small" />Eventos</Link>
                </li>
                <li className={location.pathname === "/mantenimientos" && "selected"}>
                    <Link to="/mantenimientos"><Icon name="cog" color='red' size="small" />Mantenimientos</Link>
                </li>
                <li className={location.pathname === "/salidas" && "selected"}>
                    <Link to="/salidas"><Icon name="truck" color="red" size="small"  />Salidas</Link>
                </li>
                <li className={location.pathname === "/calendario" && "selected"}>
                    <Link to="/calendario"><Icon name="calendar alternate outline" color="red" size="small"  />Calendario</Link>
                </li>
                <li className={location.pathname === "/extintores" && "selected"}>
                    <Link to="/"><Icon name="life ring" color="red" size="small"  />Extintores</Link>
                </li>
                <li className={location.pathname === "/vehiculos" && "selected"}>
                    <Link to="/"><Icon name="car" color="red" size="small"  />Vehiculos</Link>
                </li>
                <li className={location.pathname === "/departamentos" && "selected"}>
                    <Link to="/"><Icon name="clipboard outline" color="red" size="small"  />Departamentos</Link>
                </li>
                <li className={location.pathname === "/usuarios" && "selected"}>
                    <Link to="/"><Icon name="address book outline" color="red" size="small"  />Usuarios</Link>
                </li>

            </ul>

        </NavStyles>
    )
}