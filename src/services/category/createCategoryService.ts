import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}
class createCategoryService{
    async execute({name}){
        //Validate if the category name is empty
        if(name === ""){
            throw new Error("Name Invalid")
        }
        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
        //Return only select category date not private
            select:{
                id:true,
                name:true
            }
        })
    return category
    }
}
export {createCategoryService}