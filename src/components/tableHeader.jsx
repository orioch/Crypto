import { useSelector, useDispatch } from "react-redux";
import { sortCryptoArray } from "../redux/features/cryptoDataSlice";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { Th } from "react-super-responsive-table";
import { TableCell } from "@mui/material";

export default function TableHeader({ children, id }) {
  const dispatch = useDispatch();
  const { sort } = useSelector((store) => store.cryptoData);
  return (
    <TableCell onClick={() => dispatch(sortCryptoArray(id))}>
      <div className="cell">
        <div className="name-text"> {children}</div>
        {sort.prop == id ? (
          sort.directionUp ? (
            <BiUpArrow />
          ) : (
            <BiDownArrow />
          )
        ) : null}
      </div>
    </TableCell>
  );
}
