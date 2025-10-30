# ============================
# 1️⃣ Build stage
# ============================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies (choose npm/yarn/pnpm)
RUN npm ci

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# ============================
# 2️⃣ Run stage
# ============================
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
