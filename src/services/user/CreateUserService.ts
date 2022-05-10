import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    ///Verifying user send email
    if (!email) {
      throw new Error("Email Incorrect!");
    }

    //Verifying if email is already registered in database
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("User Already Exist!");
    }

    //Crypting the password in database
    const passwordHash = await hash(password, 8);

    //If all ok regist user
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    console.log("Ok!");
    return user;
  }
}
export { CreateUserService };
