import { uuid } from 'uuidv4'

export class User {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

	/* com o 'Omit<User, 'id'>', digo q em props vou receber todas as 
	propriedades, exceto id */
  constructor(props: Omit<User, 'id'>, id?: string) {
	/* o 'Object.assign(this, props)' equivale a dizer que
		this.name = props.name
		this.email = props.email
		this.password = props.password
	*/	
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}