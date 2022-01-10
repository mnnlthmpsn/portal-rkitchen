import { Fragment } from "react"
import MobSettings from "../components/mobile/mobSettings"
import SideNav from "../components/sidenav"

const Settings = () => {
    return (
        <Fragment>
            <div className="bg-gray-100 w-screen hidden lg:flex h-screen">
                <SideNav />
                <div className="flex-1">
                    <div className="h-full p-10 overflow-y-auto">
                        <p className="font-bold text-3xl text-gray-400">Settings</p>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <MobSettings />
        </Fragment>
    )
}

export default Settings