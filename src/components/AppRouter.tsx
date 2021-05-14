import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { TrabajoDesktop } from './TrabajoDesktop';
import { Trabajos } from './Trabajos';

export const AppRouter = () => {
    return (
        <Router>
            <div className="Routers">
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Desktop" component={Trabajos} />
                    <Route exact path="/Web" component={Trabajos} />
                    <Route exact path="/Mobile" component={Trabajos} />
                    <Route exact path="/Trabajo" component={TrabajoDesktop} />
                </Switch>
            </div>
        </Router>
    )
}
