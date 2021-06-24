import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
  email: string,
  password: string,
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {

    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findOne({
      email
    });
    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    }, "87a429872c7faee7e8bc9268d5bf548e", {
      subject: user.id,
      expiresIn: "1d"

    });

    return token;

  }
}

export { AuthenticateUserService }