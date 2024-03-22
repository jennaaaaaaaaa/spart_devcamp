import { BaseEntity, Column, ManyToOne, Relation } from 'typeorm';
import { User } from './user.entity';

export class RefreshToken extends BaseEntity {
  //() => User ManyToOne 관게를 나타내는 코드
  @ManyToOne(() => User)
  user: Relation<User>;

  @Column()
  token: string;
}
