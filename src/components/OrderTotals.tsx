import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProp = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProp) => {
    const subtotalAmount = order.reduce((total, item) => total + (item.quantity * item.price), 0);

    const tipAmount = subtotalAmount * tip;

    const totalAmount = subtotalAmount + tipAmount;

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Tip & totals</h2>
                <p>Subtotal: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Tip: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total to pay: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}>
                Reset
            </button>
        </>
    )
}

export default OrderTotals