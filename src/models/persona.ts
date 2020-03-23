
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Persona extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Int)
  @Column()
  RUT_PERSONA: String;

  @Field(() => String)
  @Column()
  DV_PERSONA: string;

  @Field(() => String)
  @Column()
  P_NOMBRE: string;

  @Field(() => String)
  @Column()
  P_APELLIDO: string;

  @Field(() => Int)
  @Column()
  EDAD: String;
  
  @Field(() => String)
  @Column()
  PAIS: string;
}