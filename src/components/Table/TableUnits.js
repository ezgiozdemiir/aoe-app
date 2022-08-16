import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import DataContext from '../../store/Contex';

import {
  Paper as P,
  Table as T,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Paper = styled(P)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const columns = [
  { id: 1, label: 'Id', width: 100 },
  { id: 2, label: 'Name', width: 170 },
  { id: 3, label: 'Age', width: 170 },
  { id: 4, label: 'Costs', width: 170 },
];

const Table = (props) => {
  const { data } = useContext(DataContext);

  const navigate = useNavigate();

  const { switchValue, switchOn, age } = props;

  const handleNavigate = (id) => {
    navigate(`/unit_details?id=${id}`);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <T stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((unit) => unit.age.includes(age))
                .filter((unit) =>
                  !switchOn['wood']
                    ? unit.cost?.Wood >= switchValue['wood']
                    : unit
                )
                .filter((unit) =>
                  !switchOn['food']
                    ? unit.cost?.Food >= switchValue['food']
                    : unit
                )
                .filter((unit) =>
                  !switchOn['gold']
                    ? unit.cost?.Gold >= switchValue['gold']
                    : unit
                )
                .map((unit) => (
                  <TableRow
                    hover
                    role='checkbox'
                    key={unit.id}
                    onClick={() => handleNavigate(unit.id)}
                    sx={{
                      ':hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <TableCell>{unit.id}</TableCell>
                    <TableCell>{unit.name}</TableCell>
                    <TableCell>{unit.age}</TableCell>
                    <TableCell>
                      {unit.cost?.Wood ? `Wood: ${unit.cost.Wood} ` : ''}
                      {unit.cost?.Food ? `Food: ${unit.cost.Food} ` : ''}
                      {unit.cost?.Gold ? `Gold: ${unit.cost.Gold}` : ''}
                      {!unit.cost?.Wood &&
                        !unit.cost?.Food &&
                        !unit.cost?.Gold &&
                        '-'}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </T>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
};

export default Table;
