import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { RefreshToken } from './refreshToken.entity';

export type UserRole = 'admin' | 'user';

@Entity()
export class User extends BaseEntity {
  //baseEntity: 기본쿼리 메서드

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  phone: string;

  @Column({ type: 'varchar' })
  role: UserRole;

  @CreateDateColumn({ type: 'timestamp' }) //timestamp 자동저장
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' }) //timestamp 자동저장
  updatedAt: Date;

  //token은 관계를 맺고 있는 RefreshToken 엔티티의 인스턴스(를 대표하는 가상의 이름, 이 token을 통해 인스턴스의 속성에 접근)
  // token.user는 RefreshToken 엔티티 내 정의된 user 속성을 참조(역방향 참조)
  @OneToMany(() => RefreshToken, (token) => token.user)
  refreshToken: Relation<RefreshToken[]>;
}
