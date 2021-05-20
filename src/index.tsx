import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import "./styles/styles.scss"

ReactDOM.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
  document.getElementById('root')
);
