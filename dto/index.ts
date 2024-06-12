import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
export interface UserDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
}
export class SigninDTO {
  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User password' })
  password: string;
}
export interface SigninResponseDTO {
  result: UserDto;
  accessToken: string;
}
export interface QuestionDto {
  readonly question: string;
}
export interface ExampleDTO {
  input?: string;
  output?: string;
  explanation?: string;
}

export interface ConstraintDTO {
  description?: string;
}

export interface QuestionCreateDTO {
  title?: string;
  description?: string;
  difficulty?: string;
  examples?: {
    create?: ExampleDTO[];
  };
  constraints?: {
    create?: ConstraintDTO[];
  };
}
export class CreateAttemptDto {
  @ApiProperty({ description: 'input' })
  input: string;
  @ApiProperty({ description: 'Output' })
  output?: string;
  @ApiProperty({ description: 'result' })
  result: string;
  @ApiProperty({ description: 'status' })
  status: string;
  @ApiProperty({ description: 'UserId' })
  userId: number;
  @ApiProperty({ description: 'QuestionId' })
  questionId: number;
}
