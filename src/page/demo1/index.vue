<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Demo 页面 1</h1>
      <p class="page-description">演示 Vue 组件通信和响应式数据</p>
    </div>

    <div class="demo-card">
      <div class="card-header">
        <h2 class="card-title">响应式数据演示</h2>
      </div>
      <div class="card-body">
        <div class="input-group">
          <label class="input-label">输入值:</label>
          <input type="text" class="demo-input" />
        </div>

        <div class="preview-section">
          <p class="preview-label">当前值:</p>
          <p class="preview-value">空</p>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <div class="card-header">
        <h2 class="card-title">组件通信演示</h2>
      </div>
      <div class="card-body">
        <EmitDemo v-model:demoEmit="demoValue" />

        <div class="emit-preview">
          <p class="preview-label">子组件传递的值:</p>
          <p class="preview-value highlight">{{ demoValue || '等待输入...' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import EmitDemo from './components/emitDemo.vue';

const $route = useRoute();
const demoValue = ref('');

watch(
  () => demoValue.value,
  (val) => {
    console.log('watch', val);
  },
);

console.log('Current route name:', $route.name);
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

.input-group {
  margin-bottom: 20px;

  .input-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #475569;
    margin-bottom: 8px;
  }

  .demo-input {
    width: 100%;
    max-width: 350px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    padding: 0 14px;
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

.preview-section,
.emit-preview {
  .preview-label {
    font-size: 13px;
    color: #94a3b8;
    margin: 0 0 4px 0;
  }

  .preview-value {
    font-size: 16px;
    font-weight: 500;
    color: #1e293b;
    margin: 0;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 8px;
    word-break: break-all;

    &.highlight {
      background: linear-gradient(135deg, #dbeafe 0%, #fef3c7 100%);
      border-left: 4px solid #3b82f6;
    }
  }
}
</style>
