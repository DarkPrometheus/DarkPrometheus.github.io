import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Portafolio } from './Portafolio';
import { TrabajoDesktop } from './TrabajoDesktop';
import { Trabajos } from './Trabajos';

export const AppRouter = () => {
    return (
        <Router>
            <div className="Routers">
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Portafolio" component={Portafolio} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/:seccion" component={Trabajos} />
                    <Route exact path="/Portafolio/Desktop/:trabajo" component={TrabajoDesktop} />
                    <Route exact path="/Portafolio/Web/:trabajo" component={TrabajoDesktop} />
                    <Route exact path="/Portafolio/Mobile/:trabajo" component={TrabajoDesktop} />
                </Switch>
            </div>
        </Router>
    )
}
