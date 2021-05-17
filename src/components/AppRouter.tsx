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
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Portafolio" component={Portafolio} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/Desktop/:trabajo" component={TrabajosEscritorio} />
                    <Route exact path="/Portafolio/Web/:trabajo" component={TrabajosWeb} />
                    <Route exact path="/Portafolio/Mobile/:trabajo" component={TrabajosMovil} />
                </Switch>
            </div>
        </Router>
    )
}
