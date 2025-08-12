import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    length: 50, 
    unique: true,
    comment: '사용자 고유 아이디' 
  })
  userId: string;

  @Column({ 
    length: 100, 
    unique: true,
    comment: '이메일 주소' 
  })
  email: string;

  @Column({ 
    length: 255,
    comment: '암호화된 비밀번호' 
  })
  password: string;

  @CreateDateColumn({ 
    type: 'timestamp',
    comment: '생성일시' 
  })
  createdAt: Date;

  @UpdateDateColumn({ 
    type: 'timestamp',
    comment: '수정일시' 
  })
  updatedAt: Date;
}