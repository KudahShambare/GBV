import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#40434E",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("977219321321 ", 159234, "WHATSAPP CHAT", "true"),
  createData("993249713123", 237234, "CALLBACK", "false"),
  createData("900123076812", 262234, "REFERRAL", "false"),
  createData("991230917232", 305344, "ONLINE FORM", "true"),
  createData("232132190134", 356455, "CALLBACK", "true"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    width: "90%",
    margin: "auto",
    marginTop: "4rem",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CLIENT IDENTIFICATION</StyledTableCell>
            <StyledTableCell align="right">REPORT NUMBER</StyledTableCell>
            <StyledTableCell align="right">REPORT TYPE</StyledTableCell>
            <StyledTableCell align="right">CLAIMED</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              {row.carbs === "true" ? (
                <StyledTableCell align="right">
                  <input className="checkbox" type="checkbox" />
                </StyledTableCell>
              ) : (
                <StyledTableCell align="right">
                  <input className="checkbox" type="checkbox" />
                </StyledTableCell>
              )}
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
