import { Bind, Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("user")
class UserController {

    @Get("hello")
    getHello() {
        return "Hello World!";
    }

    @Post("hello")
    @Bind(Req())
    postHello(request: Request) {
        console.log(request.ip)
        return "Hello Post World!";
    }

}

export default UserController;