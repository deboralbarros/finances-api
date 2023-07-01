import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @ApiProperty({
    description: 'User name',
    example: 'Renato Aragão',
  })
  name: string;

  @ApiProperty({
    description: 'User email, with this field it will be possible to login',
    example: 'renatoaragao@email.com',
  })
  email: string;

  @ApiProperty({
    description: 'User password, will allow you to login',
    example: 'renatoaragao123',
  })
  password: string;
}
