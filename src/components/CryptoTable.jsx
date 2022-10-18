import { useSelector } from "react-redux";
// import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import TableHeader from "./tableHeader";
// import { Table, Thead, Tbody, Tr } from "react-super-responsive-table";
import Table from "@mui/material/Table";
import {
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function CryptoTable() {
  const { cryptoArrayToDisplay, itemsInPage, currentPage } = useSelector(
    (store) => store.cryptoData
  );

  return (
    <TableContainer component={Paper}>
      <Table
        style={{
          width: "100%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableHeader id="name">Name</TableHeader>
            <TableHeader id="priceUsd">Price</TableHeader>
            <TableHeader id="changePercent24Hr">24h%</TableHeader>
            <TableHeader id="history">Last 7 days chart</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoArrayToDisplay
            .slice((currentPage - 1) * itemsInPage, currentPage * itemsInPage)
            .map((item) => {
              if (item) return <TableItem key={item.id} itemData={item} />;
              else return;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
