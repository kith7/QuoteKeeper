import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import AllQuotes from "./components/pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/pages/NewQuotes"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));

function App() {
  return (
    <Layout>
      <Switch>
        <Suspense
          fallback={
            <div className='centered'>
              <LoadingSpinner />
            </div>
          }
        >
          <Route path={"/"} exact>
            <Redirect to={"/quotes"} />
          </Route>
          <Route path={"/quotes"} exact>
            <AllQuotes />
          </Route>
          <Route path={"/quotes/:quoteId"}>
            <QuoteDetail />
          </Route>
          <Route path={"/new-quote"}>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Suspense>
      </Switch>
    </Layout>
  );
}

export default App;
