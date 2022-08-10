
import * as styled from './components/styled';
import { List } from './components/list';

const App = () => {
  return (
    <styled.ListContainer>
      <List title="Pros"></List>
      <List title="Cros"></List>
    </styled.ListContainer>
  );
}

export default App;