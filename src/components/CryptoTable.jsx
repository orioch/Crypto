import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import TableHeader from "./tableHeader";

export default function CryptoTable() {
  const { cryptoArrayToDisplay, itemsInPage, currentPage } = useSelector(
    (store) => store.cryptoData
  );

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <TableHeader id="name">Name</TableHeader>
          <TableHeader id="priceUsd">Price</TableHeader>
          <TableHeader id="changePercent24Hr">24h%</TableHeader>
          <TableHeader id="history">Last 7 days chart</TableHeader>
        </tr>
      </thead>
      <tbody>
        {cryptoArrayToDisplay
          .slice((currentPage - 1) * itemsInPage, currentPage * itemsInPage)
          .map((item) => {
            if (item) return <TableItem key={item.id} itemData={item} />;
            else return;
          })}
      </tbody>
    </Table>
  );
}
