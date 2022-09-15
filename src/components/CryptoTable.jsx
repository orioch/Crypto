import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";

export default function CryptoTable() {
  const { isLoading, cryptoArray } = useSelector((store) => store.cryptoData);
  if (isLoading) return <div>loading</div>;
  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h%</th>
        </tr>
      </thead>
      <tbody>
        {cryptoArray.slice(0, 20).map((item) => {
          if (item) return <TableItem key={item.id} itemData={item} />;
          else return;
        })}
      </tbody>
    </Table>
  );
}
