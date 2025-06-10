import { IsString, isString, MinLength } from "class-validator";

export class CreateBlogDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;

    @IsString()
    @MinLength(1)
    content: string;

    @IsString()
    author: string;

    @IsString()
    category: string;
}