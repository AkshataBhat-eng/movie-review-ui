'use client'


export const AddRating = ({handleAddRating}) => {
    return (
        <div className="w-[300px]">
            <div className="flex justify-center items-center mb-[10px] text-[#808080]">Add Rating</div>
            <div className="flex justify-between items-center text-white">
                <button onClick={()=>handleAddRating(1)} className="p-[8px] border-[1px] border-[#b6003d3d] w-[30px] h-[50px] bg-[#b6003d3d] text-[#808080] hover:opacity-[50%] cursor-pointer rounded-[4px] rating-btn">1</button>
                <button onClick={()=>handleAddRating(2)} className="p-[8px] border-[1px] border-[#b6003d3d] w-[30px] h-[50px] bg-[#b6003d3d] text-[#808080] hover:opacity-[50%] cursor-pointer rounded-[4px] rating-btn">2</button>
                <button onClick={()=>handleAddRating(3)} className="p-[8px] border-[1px] border-[#b6003d3d] w-[30px] h-[50px] bg-[#b6003d3d] text-[#808080] hover:opacity-[50%] cursor-pointer rounded-[4px] rating-btn">3</button>
                <button onClick={()=>handleAddRating(4)} className="p-[8px] border-[1px] border-[#b6003d3d] w-[30px] h-[50px] bg-[#b6003d3d] text-[#808080] hover:opacity-[50%] cursor-pointer rounded-[4px] rating-btn">4</button>
                <button onClick={()=>handleAddRating(5)} className="p-[8px] border-[1px] border-[#b6003d3d] w-[30px] h-[50px] bg-[#b6003d3d] text-[#808080] hover:opacity-[50%] cursor-pointer rounded-[4px] rating-btn">5</button>
            </div>
        </div>
    )
}