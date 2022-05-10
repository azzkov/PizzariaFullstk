import prismaClient from "../../prisma";
class DetailUserService{
    //Search the first user in database and update list
    async execute(user_id: string){
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            //Selecting only non-sensitive data for presentation 
            select:{
                id: true,
                name: true,
                email: true,
            }
        })
        return user;
    }

}
export {DetailUserService}