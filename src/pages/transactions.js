import { Fragment } from "react"
import MobTransactions from "../components/mobile/mobTransactions"
import SideNav from "../components/sidenav"

const Transactions = () => {
    return (
        <Fragment>
            <div className="bg-gray-100 w-screen hidden lg:flex h-screen">
            <SideNav />
            <div className="flex-1">
                <div className="h-full p-10 overflow-y-auto">
                    <p className="font-bold text-3xl text-gray-400">Transactions</p>
                </div>
            </div>
        </div>

        {/* mobile */}
        <MobTransactions />
        </Fragment>
    )
}

export default Transactions