<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">欢迎首页</h1>
      <p class="page-description">这是一个现代化的 Vue 3 + Ant Design Vue 管理后台模板</p>
    </div>

    <div class="input-section">
      <input type="text" class="search-input" placeholder="请输入内容..." />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
</script>

<style lang="less" scoped>
.page-container {
  min-height: 100%;
}

.page-header {
  margin-bottom: 24px;

  .page-title {
    font-size: 24px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 8px 0;
  }

  .page-description {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    &.blue {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      color: #3b82f6;
    }

    &.green {
      background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
      color: #22c55e;
    }

    &.orange {
      background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
      color: #f97316;
    }

    &.purple {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      color: #8b5cf6;
    }
  }

  .stat-info {
    flex: 1;

    .stat-value {
      font-size: 24px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 4px 0;
    }

    .stat-label {
      font-size: 13px;
      color: #94a3b8;
      margin: 0;
    }
  }
}

.input-section {
  .search-input {
    width: 100%;
    max-width: 400px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    padding: 0 16px;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #cbd5e1;
    }

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
}
</style>
