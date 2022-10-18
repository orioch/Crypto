import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCryptoHistory } from "../redux/features/cryptoDataSlice";
import {
  numberWithCommas,
  SignificantDown,
  SignificantUp,
} from "../utils/utilitis";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import ChartPreview from "./ChartPreview";
import { usePrevious } from "../utils/hooks";
import { Link } from "react-router-dom";
import { Td, Tr } from "react-super-responsive-table";
import { TableCell, TableRow } from "@mui/material";

function TableItem({ itemData }) {
  let dispatch = useDispatch();
  let prevItemData = usePrevious(itemData);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (prevItemData && itemData) {
      if (SignificantUp(prevItemData.priceUsd, itemData.priceUsd)) {
        setColor("green");
        setTimeout(() => {
          setColor("black");
        }, 3000);
      }
      if (SignificantDown(prevItemData.priceUsd, itemData.priceUsd)) {
        setColor("red");
        setTimeout(() => {
          setColor("black");
        }, 3000);
      }
    }
  }, [itemData.priceUsd]);

  useEffect(() => {
    if (!itemData.history) dispatch(getCryptoHistory(itemData.id));
  }, []);

  if (itemData && prevItemData)
    return (
      <TableRow hover>
        <TableCell>
          <Link to={"/tokens/" + itemData.symbol}>
            <div className="cell">
              <img
                src={`https://coinicons-api.vercel.app/api/icon/${itemData.symbol.toLowerCase()}`}
                className="icon"
              />
              <div className="name-text">{itemData.name}</div>
              <div className="symbol-text">{itemData.symbol}</div>
            </div>
          </Link>
        </TableCell>
        <TableCell>
          <div className={color}>
            {numberWithCommas(parseFloat(itemData.priceUsd).toFixed(2))}$
          </div>
        </TableCell>
        <TableCell>
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
        </TableCell>
        <TableCell>
          <ChartPreview dailyData={itemData.history} lineOnly={true} />
        </TableCell>
      </TableRow>
    );
}

export default TableItem;
