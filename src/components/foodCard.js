import { PencilIcon } from "@heroicons/react/solid"

const FoodCard = ({ food }) => {
    
    return (
        <div className="border rounded scale-95 hover:scale-100 duration-300 group hover:shadow-lg">
            <img src={food.attributes?.image.data?.attributes.url} className="rounded-t w-full h-auto" />
            <p className="p-4">{food.attributes.name} - <span className="text-xs font-bold">GHS {food.attributes.price.toFixed(2)}</span></p>
            <PencilIcon className="absolute top-2 right-2 h-8 bg-white rounded p-1 text-green-600 opacity-0 group-hover:opacity-100 duration-500 cursor-pointer scale-95 hover:scale-100" />
        </div>
    )
}

export default FoodCard