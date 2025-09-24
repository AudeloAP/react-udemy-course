import { useState } from "react";

interface Props {
  itemName: string,
  quantity: number | undefined
}

export const ItemCounter = ({itemName, quantity = 1}: Props) => {
  // let counter = 0;
  const [count, setCount] = useState(quantity);

  const handleAdd = () => setCount(count + 1)
  const handleSusbstraction = () => {
    if(count == 1) return
    setCount(count - 1)
  }

  // const handleClick = () => console.log(`Click en ${itemName}`)

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 13}}>
      <span
        style={{
          width: 150
        }}>
        {itemName}
      </span>
      <button onClick={handleAdd}> +1
      </button>
      <span>{count}</span>
      <button onClick={handleSusbstraction}>-1</button>
    </section>
  )
}
