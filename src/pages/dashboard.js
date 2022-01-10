import { useContext, Fragment } from "react"
import AddFood from "../components/addFood"
import FoodCard from "../components/foodCard"
import MobDashboard from "../components/mobile/mobDashboard"
import SideNav from "../components/sidenav"
import { FoodContext } from "../contexts/food"

const Home = () => {

    const { foods } = useContext(FoodContext)
    return (
        <Fragment>
            <div className="bg-gray-100 w-screen hidden lg:flex h-screen">
                <SideNav />
                <div className="flex-1">
                    <div className="h-full p-10 overflow-y-auto">
                        <p className="font-bold text-3xl text-gray-400">Dashboard</p>
                        <div className="grid grid-cols-3 gap-4 py-5">
                            {/* food card */}
                            {
                                foods.length > 0
                                    ? foods.map(food => (
                                        <FoodCard food={food} key={food.id} />
                                    ))
                                    : <p>No foods added yet</p>
                            }
                        </div>
                    </div>
                </div>
                <AddFood />
            </div>

            {/* mobile */}
            <MobDashboard />
        </Fragment>

    )
}

export default Home