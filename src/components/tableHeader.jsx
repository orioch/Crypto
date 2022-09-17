import { useSelector, useDispatch } from "react-redux";
import { sortCryptoArray } from "../redux/features/cryptoDataSlice";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

export default function TableHeader({ children, id }) {
  const dispatch = useDispatch();
  const { sort } = useSelector((store) => store.cryptoData);
  return (
    <th onClick={() => dispatch(sortCryptoArray(id))}>
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
    </th>
  );
}
