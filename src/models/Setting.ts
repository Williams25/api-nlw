import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity({ name: 'settings' })
class Setting {

  @PrimaryColumn()
  id: string

  @Column()
  userName: string

  @Column()
  chat: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) this.id = uuid()
  }
}

export { Setting }