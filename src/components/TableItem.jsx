import { numberWithCommas } from "../utils/utilitis";

function TableItem({ itemData }) {
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
      </tr>
    );
}

export default TableItem;
