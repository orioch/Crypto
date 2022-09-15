function TableItem({ itemData }) {
  if (itemData)
    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{parseFloat(itemData.priceUsd).toFixed(2)}$</td>
      </tr>
    );
}

export default TableItem;
