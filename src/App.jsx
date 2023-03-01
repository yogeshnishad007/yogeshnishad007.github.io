import React from 'react';
import './App.css';
import Projects from './Components/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { ThemeProvider } from 'styled-components';
import Home from './Container/Home';
// import AnimatedCursor from 'react-animated-cursor';


const LightTheme = {
    backgroundColor: '#f0edf6', 
    fontColorHeader: '#343a40',
    fontColorHeaderHover: '#fff',
    fontColorPrimary: '#495057', 
    fontColorSecondary: '#495057', 
    cardColor: '#fbfbfd', 
    socialIconColor: 'rgba(37, 38, 94, 0.7)', 
    commonBorder: '#15161b', 
};
const themes = {
    light: LightTheme,
};

const App = () => {
    const [currentTheme] = React.useState('light');
  
    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <div className='app'>

                <Router>
                    <Switch>
                        <Home
                            currentTheme={currentTheme}
                           
                        />
                        <Route exact path='/'>
                            <Home
                                currentTheme={currentTheme}
                               
                            />
                        </Route>
                        <Route path='/projects' component={Projects} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route exact path='*' component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
