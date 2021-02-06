import React from "react";
import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";
import {rutas} from "rutas/rutas";

export default function Navegacion(){
    return(
        <Router>
            <Switch>
                {
                    rutas.map(ruta => 
                    <Route
                        key={ruta.path}
                        path={ruta.path}
                        exact={ruta.exact}
                        render={(props) => (
                            <ruta.layout>
                                <ruta.component {...props} />
                            </ruta.layout>
                        )}
                     />
                    )
                }
            </Switch>
        </Router>
    )
}