import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDataElement,
  changeModalActive,
} from "../../redux/reducers/dataTable";
import { Box, Button } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: "75%",
  },
});

export const TableShares = () => {
  const dispatch = useDispatch();
  const { dataTable } = useSelector((state) => state.content);
  const classes = useStyles();
  return (
    <Box>
      <Button
        onClick={() => {
          dispatch(changeModalActive());
        }}
        variant="outlined"
        color="primary"
        size="large"
      >
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((element) => (
              <TableRow key={element.id}>
                <TableCell component="th" scope="row">
                  <TextField
                    id="date"
                    type="date"
                    onChange={(e) => {
                      const data = {
                        ...element,
                        date: e.target.value,
                      };
                      dispatch(changeDataElement(data));
                    }}
                    value={element.date}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    onChange={(e) => {
                      const data = {
                        ...element,
                        name: e.target.value,
                      };
                      dispatch(changeDataElement(data));
                    }}
                    value={element.name}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    onChange={(e) => {
                      const data = {
                        ...element,
                        cost: e.target.value,
                      };
                      dispatch(changeDataElement(data));
                    }}
                    value={element.cost}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
