import { Resolver, Query,Mutation ,Arg} from "type-graphql";
import {  Persona } from "../models/persona";
import { CreatePersonaInput } from "../inputs/CreatePersonaInput";
import { UpdatePersonaInput } from "../inputs/UpdatePersonaInput";



@Resolver()
export class personaResolver {
  @Query(() => [Persona])
  persona() {
    return Persona.find()
  }

@Query(() => Persona)
ConsultarpersonaPorID(@Arg("id") id: string) {
  return Persona.findOne({ where: { id } });
}

@Mutation(() => Persona)
async createPersona(@Arg("data") data: CreatePersonaInput) {
  const persona = Persona.create(data);
  await persona.save();
  return persona;
}

@Mutation(() => Persona)
async updatePersona(@Arg("id") id: string, @Arg("data") data: UpdatePersonaInput) {
  const persona = await Persona.findOne({ where: { id } });
  if (!persona) throw new Error("Persona not found!");
  Object.assign(persona, data);
  await persona.save();
  return persona;
}

  @Mutation(() => Boolean)
  async deletePersona(@Arg("id") id: string) {
    const persona = await Persona.findOne({ where: { id } });
    if (!persona) throw new Error("Persona not found!");
    await persona.remove();
    return true;
  }
}
