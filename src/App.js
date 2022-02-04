import { Page, Button } from '@ks/my-local-package';

const App = () => (
  <>
  <Page />
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Button
      primary
      label='Accept'
      onClick={() => alert('I\'m a button from the local package!')}
    />
  </div>
  </>
);

export default App;
