import { InputType, Field } from "type-graphql";

@InputType()
export class CreatePersonaInput {
    @Field()
    RUT_PERSONA: String;
  
    @Field()
    DV_PERSONA: string;
  

    @Field()
    P_NOMBRE: string;
  

    @Field()
    P_APELLIDO: string;
  

    @Field()
    EDAD: String;
    
    @Field()
    PAIS: string;
}