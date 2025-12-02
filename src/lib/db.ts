// 简单的内存数据库（仅用于演示）
// 生产环境应使用真实的数据库（如 PostgreSQL、MongoDB 等）

export type SubscriptionStatus = "active" | "cancelled" | "expired" | "pending" | "none";

export type Subscription = {
  id: string;
  creemSubscriptionId: string;
  userId: string;
  productId: string;
  status: SubscriptionStatus;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
  createdAt: number;
  updatedAt: number;
};

export type User = {
  id: string;
  email: string;
  password: string;
  name?: string;
  subscriptionId?: string;
  createdAt: number;
};

// 内存存储
const users: User[] = [];
const subscriptions: Subscription[] = [];

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
    update: (id: string, updates: Partial<User>) => {
      const user = users.find((u) => u.id === id);
      if (user) {
        Object.assign(user, updates);
        return user;
      }
      return null;
    },
    getAll: () => users,
  },
  subscriptions: {
    findById: (id: string) => subscriptions.find((s) => s.id === id),
    findByCreemId: (creemId: string) =>
      subscriptions.find((s) => s.creemSubscriptionId === creemId),
    findByUserId: (userId: string) =>
      subscriptions.find((s) => s.userId === userId),
    create: (subscription: Omit<Subscription, "id" | "createdAt" | "updatedAt">) => {
      const newSubscription: Subscription = {
        ...subscription,
        id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      subscriptions.push(newSubscription);
      return newSubscription;
    },
    update: (id: string, updates: Partial<Subscription>) => {
      const subscription = subscriptions.find((s) => s.id === id);
      if (subscription) {
        Object.assign(subscription, { ...updates, updatedAt: Date.now() });
        return subscription;
      }
      return null;
    },
    updateByCreemId: (creemId: string, updates: Partial<Subscription>) => {
      const subscription = subscriptions.find((s) => s.creemSubscriptionId === creemId);
      if (subscription) {
        Object.assign(subscription, { ...updates, updatedAt: Date.now() });
        return subscription;
      }
      return null;
    },
    getAll: () => subscriptions,
  },
};

