import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Blog {
    //@column({primary:true, generated:true}) // alternativa
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    content: string;
    @Column()
    date: Date;
    @Column()
    author: string;
    @Column()
    category: string;
}
