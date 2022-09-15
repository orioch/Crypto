import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function CryptoList() {
  const { isLoading, cryptoArray } = useSelector((store) => store.cryptoData);
  if (isLoading) return <div>loading</div>;
  return (
    <div className="list">
      {cryptoArray.slice(0, 20).map((item) => {
        if (item) return <ListItem key={item.id} itemData={item} />;
        else return;
      })}
      <ListItem />
    </div>
  );
}

export default CryptoList;
