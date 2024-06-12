import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto, SigninDTO, SigninResponseDTO, UserDto } from 'dto';

@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('/signin')
  async login(
    @Body()
    signindto: SigninDTO,
  ): Promise<SigninResponseDTO> {
    const { email, password } = signindto;
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    const { password: userpass, ...result } = user;
    return { result, accessToken };
  }
  @Post('/register')
  @ApiBody({ type: CreateUserDto })
  async register(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const { firstname, lastname, email, password } = createUserDto;
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    };
    const user = await this.userService.createUser(data);
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
  }
}
