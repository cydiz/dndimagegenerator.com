# Creem 订阅集成指南

## 配置步骤

### 1. 获取 Creem API 密钥

1. 登录 [Creem Dashboard](https://creem.io/dashboard)
2. 在 Dashboard 中找到 "Your api key"
3. 复制 API Key（格式：`creem_xxxxx`）
4. 保存到 `.env.local` 文件

**当前 API Key:** `creem_9gQcBSKX4N1moLPo9Zrx0`

### 2. 创建订阅产品

1. 在 Creem Dashboard 中，创建产品
2. 当前示例产品：
   - **ZanLi**: 月付订阅，价格 $5/月
   - Product ID: `prod_your-product-id`（替换为实际产品 ID）
3. 复制产品的 Product ID（格式：`prod_xxxxx`）

### 3. 配置环境变量

创建 `.env.local` 文件（基于 `.env.example`）：

```bash
# Creem API Key (从 Dashboard 获取)
CREEM_API_KEY=creem_9gQcBSKX4N1moLPo9Zrx0

# Creem API Base URL
NEXT_PUBLIC_CREEM_API_BASE=https://api.creem.io

# Webhook Secret (从 Webhooks 设置获取)
CREEM_WEBHOOK_SECRET=your_webhook_secret_here

# Product IDs (从 Products 页面获取)
# 当前产品: ZanLi - $5.00/月
NEXT_PUBLIC_CREEM_PRO_MONTHLY_ID=prod_i8NTuL9iqdS25MHvi1NfU
NEXT_PUBLIC_CREEM_PRO_YEARLY_ID=prod_i8NTuL9iqdS25MHvi1NfU
NEXT_PUBLIC_CREEM_TEAM_MONTHLY_ID=prod_i8NTuL9iqdS25MHvi1NfU

# Application Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. 配置 Webhook

1. 在 Creem Dashboard 中，进入 Webhooks 设置
2. 添加新的 Webhook URL: `https://yourdomain.com/api/subscription/webhook`
3. 选择需要监听的事件（根据 Creem API 文档）
4. 复制 Webhook Secret 到环境变量

**注意:** Webhook 端点格式可能因 Creem API 版本而异，请参考 Creem API 文档

## API 路由

### POST `/api/subscription/create`
创建订阅结账会话

**请求体:**
```json
{
  "productId": "prod_i8NTuL9iqdS25MHvi1NfU",
  "userId": "user_xxxxx",
  "email": "user@example.com"
}
```

**响应:**
```json
{
  "checkoutUrl": "https://checkout.creem.io/...",
  "checkoutId": "checkout_xxxxx"
}
```

**Creem API 调用:**
```typescript
POST https://api.creem.io/v1/checkouts
Headers: {
  "x-api-key": "creem_9gQcBSKX4N1moLPo9Zrx0"
}
Body: {
  "product_id": "prod_i8NTuL9iqdS25MHvi1NfU"
}
```

### GET `/api/subscription/status`
获取当前用户的订阅状态

**Headers:**
```
Authorization: Bearer <token>
```

**响应:**
```json
{
  "hasSubscription": true,
  "status": "active",
  "currentPeriodEnd": 1234567890,
  "cancelAtPeriodEnd": false
}
```

### POST `/api/subscription/cancel`
取消订阅

**Headers:**
```
Authorization: Bearer <token>
```

**请求体:**
```json
{
  "cancelAtPeriodEnd": true
}
```

### POST `/api/subscription/webhook`
Creem Webhook 端点（由 Creem 调用）

## 使用示例

### 在页面中创建订阅

```tsx
import { useAuth } from "@/contexts/AuthContext";

function PricingPage() {
  const { user } = useAuth();
  
  async function handleSubscribe(productId: string) {
    const response = await fetch("/api/subscription/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(user && {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        }),
      },
      body: JSON.stringify({
        productId,
        userId: user?.id,
        email: user?.email,
      }),
    });
    
    const data = await response.json();
    window.location.href = data.checkoutUrl;
  }
  
  return <button onClick={() => handleSubscribe("prod_xxxxx")}>Subscribe</button>;
}
```

### 检查订阅状态

```tsx
useEffect(() => {
  fetch("/api/subscription/status", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.hasSubscription && data.status === "active") {
        // User has active subscription
      }
    });
}, []);
```

## 测试

1. 使用 Creem 的测试模式进行测试
2. 使用测试信用卡进行支付测试
3. 验证 Webhook 是否正确接收事件
4. 检查订阅状态是否正确更新

## 注意事项

- 确保在生产环境中使用 HTTPS
- Webhook Secret 必须保密，不要提交到代码仓库
- 实现适当的错误处理和重试机制
- 定期同步订阅状态（通过 Webhook 或定期轮询）
- 处理订阅过期和取消的情况

