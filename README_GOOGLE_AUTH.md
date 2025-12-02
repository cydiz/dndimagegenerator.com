# Google OAuth 登录集成指南

## 配置步骤

### 1. 创建 Google OAuth 2.0 凭据

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Google+ API：
   - 进入 "APIs & Services" > "Library"
   - 搜索 "Google+ API" 并启用
4. 创建 OAuth 2.0 凭据：
   - 进入 "APIs & Services" > "Credentials"
   - 点击 "Create Credentials" > "OAuth client ID"
   - 如果提示配置同意屏幕，先完成配置
   - 应用类型选择 "Web application"
   - 名称：Hotpot AI（或您的应用名称）
   - **授权的 JavaScript 来源**：
     - `http://localhost:3000`（开发环境）
     - `https://yourdomain.com`（生产环境）
   - **授权的重定向 URI**：
     - `http://localhost:3000/api/auth/google/callback`（开发环境）
     - `https://yourdomain.com/api/auth/google/callback`（生产环境）
5. 复制 **客户端 ID** 和 **客户端密钥**

### 2. 配置环境变量

在项目根目录创建 `.env.local` 文件：

```bash
# Google OAuth 2.0 配置
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Application Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. OAuth 流程

1. **用户点击 "Continue with Google" 按钮**
   - 前端调用 `/api/auth/google`
   - 后端重定向到 Google 授权页面

2. **用户在 Google 授权页面同意**
   - Google 重定向回 `/api/auth/google/callback?code=xxx&state=xxx`

3. **后端处理回调**
   - 验证 state（CSRF 保护）
   - 使用 code 换取 access_token
   - 使用 access_token 获取用户信息
   - 创建或查找用户
   - 生成认证 token
   - 重定向到登录页面并传递 token

4. **前端处理成功回调**
   - 从 URL 参数获取 token
   - 存储到 localStorage
   - 获取用户信息
   - 重定向到首页

## API 路由

### GET `/api/auth/google`
初始化 Google OAuth 登录流程

**响应：** 重定向到 Google 授权页面

### GET `/api/auth/google/callback`
处理 Google OAuth 回调

**查询参数：**
- `code`: 授权码
- `state`: CSRF 保护状态码
- `error`: 错误信息（如果有）

**响应：** 重定向到登录页面

## 安全注意事项

1. **CSRF 保护**：使用 state 参数防止 CSRF 攻击
2. **Token 安全**：在生产环境中使用 HTTPS
3. **客户端密钥**：永远不要暴露在客户端代码中
4. **重定向 URI**：确保与 Google Console 中配置的完全一致

## 测试

1. 确保环境变量已正确配置
2. 启动开发服务器：`npm run dev`
3. 访问登录页面：`http://localhost:3000/login`
4. 点击 "Continue with Google" 按钮
5. 完成 Google 授权流程
6. 验证用户信息是否正确获取

## 故障排除

### 错误：redirect_uri_mismatch
- 检查 Google Console 中配置的重定向 URI 是否与代码中的完全一致
- 确保包含协议（http/https）和端口号

### 错误：invalid_client
- 检查 GOOGLE_CLIENT_ID 和 GOOGLE_CLIENT_SECRET 是否正确
- 确保环境变量已正确加载

### 用户信息获取失败
- 检查 Google+ API 是否已启用
- 验证 access_token 是否有效

