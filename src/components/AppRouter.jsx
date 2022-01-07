import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Portafolio } from './Portafolio';
import { TrabajosWeb } from './TrabajosWeb';
import { Trabajos } from './Trabajos';
import { TrabajosEscritorio } from './TrabajosEscritorio';
import { TrabajosMovil } from './TrabajosMovil';
import { Contacto } from './Contacto';
import 'animate.css';

export const AppRouter = () => {
    return (
        <Router>
            <div className="Routers">
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Contacto" component={Contacto} />
                    <Route path="/Portafolio/Desktop/:trabajo" component={TrabajosEscritorio} />
                    <Route path="/Portafolio/Web/:trabajo" component={TrabajosWeb} />
                    <Route path="/Portafolio/Mobile/:trabajo" component={TrabajosMovil} />
                    <Route path="/Portafolio/:seccion" component={Trabajos} />
                    <Route path="/Portafolio/:seccion" component={Trabajos} />
                    <Route path="/Portafolio/:seccion" component={Trabajos} />
                    <Route path="/Portafolio" component={Portafolio} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
}
