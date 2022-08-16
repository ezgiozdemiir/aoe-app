import { useSearchParams } from 'react-router-dom';

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

const rows = [
  { id: 1, label: 'Id', width: 50 },
  { id: 2, label: 'Name', width: 100 },
  { id: 3, label: 'Description', width: 150 },
  { id: 4, label: 'Min. Required Age', width: 50 },
  { id: 5, label: 'Wood Cost', width: 50 },
  { id: 6, label: 'Food Cost', width: 50 },
  { id: 7, label: 'Gold Cost', width: 50 },
  { id: 8, label: 'Build Time', width: 50 },
  { id: 9, label: 'Reload Time', width: 50 },
  { id: 10, label: 'Hit Points', width: 50 },
  { id: 11, label: 'Attack', width: 50 },
  { id: 12, label: 'Accuracy', width: 50 },
];

const Table = ({ data }) => {
  const searchParams = useSearchParams();

  const id = searchParams[0].get('id');

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <T stickyHeader aria-label='sticky table'>
            <TableHead sx={{ width: 800 }}>
              <TableRow>
                <TableCell colSpan={2} align='center'>
                  Unit Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((unit) => unit.id === Number(id))
                .map((unit) =>
                  rows.map((row, index) => (
                    <TableRow hover role='checkbox' key={row.id}>
                      {row.id === index + 1 && (
                        <TableCell sx={{ minWidth: 200, width: '30%' }}>
                          {row.label}
                        </TableCell>
                      )}
                      {row.id === 1 && (
                        <TableCell sx={{ width: '70%' }}>{unit.id}</TableCell>
                      )}
                      {row.id === 2 && (
                        <TableCell sx={{ width: '70%' }}>{unit.name}</TableCell>
                      )}
                      {row.id === 3 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.description}
                        </TableCell>
                      )}
                      {row.id === 4 && (
                        <TableCell sx={{ width: '70%' }}>{unit.age}</TableCell>
                      )}
                      {row.id === 5 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.cost?.Wood ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 6 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.cost?.Food ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 7 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.cost?.Gold ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 8 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.build_time ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 9 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.reload_time ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 10 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.hit_points}
                        </TableCell>
                      )}
                      {row.id === 11 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.attack ?? '-'}
                        </TableCell>
                      )}
                      {row.id === 12 && (
                        <TableCell sx={{ width: '70%' }}>
                          {unit.accuracy ?? '-'}
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                )}
            </TableBody>
          </T>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
};

export default Table;
