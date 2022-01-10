import { Fragment } from "react"
import MobNav from "./mobNav"

const MobTransactions = () => {
    return (
        <div className="block lg:hidden">
            <div className="sticky top-0 flex justify-between items-center p-4 border-b z-10 bg-gray-100">
                <p className="font-bold text-lg text-gray-500">Transactions</p>
            </div>

            {/* floating nav */}
            <MobNav />
        </div>
    )
}

export default MobTransactions