import React from 'react';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess'
function App() {
  const wrapper={
padding:20
};
  return (
    <div className={wrapper}>
    <Alert title="Items not Added" type="error">
      <div>your items are out of stock.</div>
    </Alert>
    <CartSuccess/>
</div>
  );
}

export default App;
