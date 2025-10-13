import { ItemCounter } from "./shopping-cart/ItemCounter";
interface ItemInCart {
  productName: string
  quantity: number
}

const itemsInCart: ItemInCart[] = [
  { productName: "Shure 215", quantity: 3 },
  { productName: "IFI studio", quantity: 2 },
  { productName: "plug converter", quantity: 2 },
  { productName: "inear pads", quantity: 1 },
]

export function FirstSteps() {
  return (
    <>
      <h1>Shoping Cart</h1>

      {itemsInCart.map((item) =>
      (<ItemCounter key={item.productName} itemName={item.productName}
        quantity={item.quantity} />
      )
      )

      {/* <ItemCounter itemName="nintento" quantity={0}/>
      <ItemCounter itemName="xbox" quantity={0}/>
      <ItemCounter itemName="la play" quantity={0}/> */}
    </>
  );
}