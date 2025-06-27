import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateBlogDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    title?: string;
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    description?: string;
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    content?: string;
    
    @IsString()
    @IsOptional()
    author?: string;
    
    @IsString()
    @IsOptional()
    category?: string;
    
    @IsOptional()
    date?: Date;
}
