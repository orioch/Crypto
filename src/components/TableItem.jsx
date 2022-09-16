import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCryptoHistory } from "../redux/features/cryptoDataSlice";
import { numberWithCommas } from "../utils/utilitis";
import ChartPreview from "./ChartPreview";

function TableItem({ itemData }) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoHistory(itemData.id));
  }, []);

  if (itemData)
    return (
      <tr>
        <td>
          <div className="name-cell">
            <img
              src={`https://coinicons-api.vercel.app/api/icon/${itemData.symbol.toLowerCase()}`}
              className="icon"
            />
            <div className="name-text">{itemData.name}</div>
            <div className="symbol-text">{itemData.symbol}</div>
          </div>
        </td>
        <td>{numberWithCommas(parseFloat(itemData.priceUsd).toFixed(2))}$</td>
        <td>{parseFloat(itemData.changePercent24Hr).toFixed(2)}%</td>
        <td>
          <ChartPreview dailyData={itemData.history} lineOnly={true} />
        </td>
      </tr>
    );
}

export default TableItem;
