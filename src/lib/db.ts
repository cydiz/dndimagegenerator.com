// 简单的内存数据库（仅用于演示）
// 生产环境应使用真实的数据库（如 PostgreSQL、MongoDB 等）

export type User = {
  id: string;
  email: string;
  password: string;
  name?: string;
  createdAt: number;
};

// 内存存储
const users: User[] = [];

export const db = {
  users: {
    findById: (id: string) => users.find((u) => u.id === id),
    findByEmail: (email: string) =>
      users.find((u) => u.email === email.toLowerCase()),
    create: (user: Omit<User, "id" | "createdAt">) => {
      const newUser: User = {
        ...user,
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: Date.now(),
      };
      users.push(newUser);
      return newUser;
    },
    getAll: () => users,
  },
};

