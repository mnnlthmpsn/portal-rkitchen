import { Fragment } from "react"
import MobOrder from "../components/mobile/mobOrder"
import SideNav from "../components/sidenav"

const Orders = () => {
    return (
        <Fragment>
            <div className="bg-gray-100 w-screen hidden lg:flex h-screen">
                <SideNav />
                <div className="flex-1">
                    <div className="h-full p-10 overflow-y-auto">
                        <p className="font-bold text-3xl text-gray-400">Orders</p>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <MobOrder />
        </Fragment>
    )
}

export default Orders