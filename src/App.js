import { Page, Button } from '@ks/how-to-develop-a-package-locally';

const App = () => (
  <>
    <Page />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        primary
        label="Accept"
        onClick={() => alert("I'm a button from the local package!")}
      />
    </div>
  </>
);

export default App;
