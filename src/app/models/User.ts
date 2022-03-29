import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

import bcrypt from "bcryptjs";

@Entity('user')
class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  email: string;

  @Column()
  nome: string;

  @Column()
  password: string;


  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}

export default User;