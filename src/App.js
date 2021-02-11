import logo from './logo.svg';
import './App.css';
import { TableShares } from './components/table/table';
import { FormShares } from './components/form/form';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

function App() {
  const { isModalActive } = useSelector((state) => state.content)
  return (<Box>
    <TableShares />
    { isModalActive && <FormShares />}
  </Box>
  );
}

export default App;
