<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Demo 页面 2</h1>
      <p class="page-description">演示 Vue 3 组件实例和响应式数据</p>
    </div>

    <div class="demo-card">
      <div class="card-header">
        <h2 class="card-title">响应式输入演示</h2>
      </div>
      <div class="card-body">
        <div class="input-wrapper">
          <input v-model="count" type="text" class="styled-input" placeholder="请输入内容..." />
        </div>

        <div class="value-display">
          <span class="label">当前值:</span>
          <span class="value">{{ count }}</span>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <div class="card-header">
        <h2 class="card-title">组件信息</h2>
      </div>
      <div class="card-body">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">组件名称:</span>
            <span class="info-value">demo2</span>
          </div>
          <div class="info-item">
            <span class="info-label">渲染状态:</span>
            <span class="info-value status active">已挂载</span>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <div class="card-header">
        <h2 class="card-title">功能按钮</h2>
      </div>
      <div class="card-body">
        <div class="button-group">
          <button class="btn btn-primary">保存</button>
          <button class="btn btn-default">刷新</button>
          <button class="btn btn-danger">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue';

const count = ref('初始化值');

console.log('组件实例', getCurrentInstance());
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

.demo-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    padding: 16px 20px;
    border-bottom: 1px solid #f1f5f9;

    .card-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }
  }

  .card-body {
    padding: 20px;
  }
}

.input-wrapper {
  margin-bottom: 16px;

  .styled-input {
    width: 100%;
    max-width: 350px;
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

.value-display {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 10px;

  .label {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  .value {
    font-size: 16px;
    font-weight: 600;
    color: #3b82f6;
    min-width: 100px;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px;
  background: #f8fafc;
  border-radius: 8px;

  .info-label {
    font-size: 13px;
    color: #94a3b8;
  }

  .info-value {
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;

    &.status {
      &.active {
        color: #22c55e;
        display: inline-flex;
        align-items: center;
        gap: 6px;

        &::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }
      }
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &-default {
    background: #f1f5f9;
    color: #475569;
    border: 1px solid #e2e8f0;
  }

  &-danger {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
}
</style>
