import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCryptoHistory } from "../redux/features/cryptoDataSlice";
import { numberWithCommas } from "../utils/utilitis";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import ChartPreview from "./ChartPreview";
import { usePrevious } from "../utils/hooks";

function TableItem({ itemData }) {
  let dispatch = useDispatch();
  let prevItemData = usePrevious(itemData);
  useEffect(() => {
    if (!itemData.history) dispatch(getCryptoHistory(itemData.id));
  }, []);

  if (itemData)
    return (
      <tr>
        <td>
          <div className="cell">
            <img
              src={`https://coinicons-api.vercel.app/api/icon/${itemData.symbol.toLowerCase()}`}
              className="icon"
            />
            <div className="name-text">{itemData.name}</div>
            <div className="symbol-text">{itemData.symbol}</div>
          </div>
        </td>
        <td>
          <div
            className={
              prevItemData.priceUsd < itemData.priceUsd
                ? "cell green"
                : prevItemData.priceUsd > itemData.priceUsd
                ? "cell red"
                : "cell"
            }
          >
            {numberWithCommas(parseFloat(itemData.priceUsd).toFixed(2))}$
          </div>
        </td>
        <td>
          <div
            className={
              itemData.changePercent24Hr > 0 ? "cell green" : "cell red"
            }
          >
            {itemData.changePercent24Hr > 0 ? (
              <BiUpArrow className="icon" />
            ) : (
              <BiDownArrow className="icon" />
            )}
            {Math.abs(parseFloat(itemData.changePercent24Hr).toFixed(2))}%
          </div>
        </td>
        <td>
          <ChartPreview dailyData={itemData.history} lineOnly={true} />
        </td>
      </tr>
    );
}

export default TableItem;
