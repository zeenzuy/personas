import { InputType, Field } from "type-graphql";

@InputType()
export class UpdatePersonaInput {
  @Field({ nullable: true })
  RUT_PERSONA: String;

  @Field({ nullable: true })
  DV_PERSONA: string;

  @Field({ nullable: true })
  P_NOMBRE: string;

  @Field({ nullable: true })
  P_APELLIDO: string;

  @Field({ nullable: true })
  EDAD: String;
  
  @Field({ nullable: true })
  PAIS: string;
}