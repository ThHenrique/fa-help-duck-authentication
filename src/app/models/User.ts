import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

import bcrypt from "bcryptjs";

@Entity('user')
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  role: string

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}

export default User;