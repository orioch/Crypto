import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import TableHeader from "./tableHeader";

export default function CryptoTable() {
  const { cryptoArray, itemsInPage, currentPage } = useSelector(
    (store) => store.cryptoData
  );

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <TableHeader>name</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>24h%</TableHeader>
          <TableHeader>Last 7 days chart</TableHeader>
        </tr>
      </thead>
      <tbody>
        {cryptoArray
          .slice((currentPage - 1) * itemsInPage, currentPage * itemsInPage)
          .map((item) => {
            if (item) return <TableItem key={item.id} itemData={item} />;
            else return;
          })}
      </tbody>
    </Table>
  );
}
