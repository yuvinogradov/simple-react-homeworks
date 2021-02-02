import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
  Error404: "/Error404"
};

function Routes() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>
        {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтобы указать полное совподение (что после "/" ничего не будет)*/}
        <Route path={"/"} exact render={() => <Redirect to={PATH.JUNIOR} />} />
        <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
        <Route path={PATH.JUNIOR} render={() => <Junior />} />
        <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus />} />
        {/* <Redirect exact from="/" to={PATH.JUNIOR} /> */}
        {/* // add routes */}

        {/*у этого роута нет пути, он отрисуется, если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
