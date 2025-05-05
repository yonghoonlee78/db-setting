import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  // Todo: user entity를 완성합니다.(id, userId, email, password, createdAt, updatedAt)
}
