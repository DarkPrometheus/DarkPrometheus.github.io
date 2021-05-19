import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Portafolio } from './Portafolio';
import { TrabajosWeb } from './TrabajosWeb';
import { Trabajos } from './Trabajos';
import { TrabajosEscritorio } from './TrabajosEscritorio';
import { TrabajosMovil } from './TrabajosMovil';

export const AppRouter = () => {
    return (
        <Router>
            <div className="Routers">
                <Switch>
                    <Route path="/Home" component={Home} />
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
