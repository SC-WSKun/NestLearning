import { Bind, Controller, Get, Post, Param, Body, Put, Delete} from "@nestjs/common";
import { Request } from "express";
import { identity } from "rxjs";
import { UserCreateDto, UserDto, UserUpdateDto } from "src/dto/user.dto";

@Controller("user")
class UserController {

    @Get()
    async searchUsers():Promise<UserDto[]>{
        return []
    }

    @Get(':id')
    getUser(@Param('id') id:string):Promise<UserDto>{
        return Promise.resolve({
            id,
            username: 'kunkun',
            age: 18,
            gender: '男',
            create_time: '2021-07-01',
            update_time: '2021-07-01',
        });
    }

    @Post()
    createUser(@Body() userCreateDto: UserCreateDto){
        return userCreateDto;
    }

    @Put()
    updateUser(@Body() userUpdateDto: UserCreateDto){
        return userUpdateDto;
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return `User ${id} deleted`;
    }
}

export default UserController;