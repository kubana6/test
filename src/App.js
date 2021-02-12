import './App.css';
import { FormShares } from './components/form/form';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Chart } from './components/chart/chart';
import { TableShares } from './components/table/table';

function App() {
  const { isModalActive } = useSelector((state) => state.content)
  return (<Box className='box'>
    <TableShares />
    { isModalActive && <FormShares />}
    <Chart />
  </Box>
  );
}

export default App;
