import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userServive: UserService) { }

    @Get()
    getAllUsers() {
        return this.userServive.getAllUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string) {
        return this.userServive.getUser(userId);
    }

    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ) {
        const userId = this.userServive.insertUser(name, age, surname, email);
        return {
            id: userId,
        }
    }

    @Put(':userId')
    updateUser(
        @Param('userId') userId: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ) {
        return this.userServive.updateUser(userId,name,age,surname,email);
    }

    @Delete(':userId')
    deleteUser(
        @Param('userId') userId:string
    ){
        this.userServive.deleteUser(userId);
    }

}
