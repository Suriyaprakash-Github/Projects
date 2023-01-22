import { Fragment, useState } from "react";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
