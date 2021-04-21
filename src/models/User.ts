import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity({ name: 'users' })
class User {

  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) this.id = uuid()
  }
}

export { User }