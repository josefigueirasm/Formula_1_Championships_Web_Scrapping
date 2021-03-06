import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FindUsers from '../../user/components/FindUsers';
import User from '../../user/components/User';
import Home from './Home';
import SignUp from '../../user/components/SignUp';
import LogIn from '../../user/components/LogIn';
import ChanguePassword from '../../user/components/ChanguePassword';
import ChangueProfileData from '../../user/components/ChangueProfileData';
import RecoverUser from '../../user/components/RecoverUser';
import ResetPassword from '../../user/components/ResetPassword';
import FormulaDataVictoriesFilter from "./FormulaDataVictoriesFilter";
import FormulaDataFastestLapsFilter from "./FormulaDataFastestLapsFilter";

const Body = () => {

    return (

        <Container>
            <br />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/grandes-premios"><FormulaDataVictoriesFilter/></Route>
                <Route exact path="/vueltas-rapidas"><FormulaDataFastestLapsFilter/></Route>
                <Route exact path="/users/find-users"><FindUsers/></Route>
                <Route exact path="/users/signUp"><SignUp/></Route>
                <Route exact path="/users/login"><LogIn/></Route>
                <Route exact path="/users/recover"><RecoverUser/></Route>
                <Route exact path="/users/:userName"><User/></Route>
                <Route exact path="/users/:userName/changue-password"><ChanguePassword/></Route>
                <Route exact path="/users/:userName/reset-password/:token"><ResetPassword/></Route>
                <Route exact path="/users/:userName/changue-data"><ChangueProfileData/></Route>
                <Route><Home /></Route>
            </Switch>
        </Container>

    );

};

export default Body;
