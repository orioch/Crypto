import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";

export default function CryptoTable() {
  const { cryptoArray, itemsInPage, currentPage } = useSelector(
    (store) => store.cryptoData
  );

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h%</th>
          <th>Last 7 days chart</th>
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
