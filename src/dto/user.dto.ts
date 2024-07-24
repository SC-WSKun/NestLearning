export class UserDto {
  id: string;
  username: string;
  age: number;
  gender: string;
  create_time: string;
  update_time: string;
}

export class UserCreateDto {
  username: string;
  age: number;
  gender: string;
}

export class UserUpdateDto {
  username: string;
  age: number;
  gender: string;
}
