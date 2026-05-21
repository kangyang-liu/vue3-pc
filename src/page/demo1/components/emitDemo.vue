<template>
  <div class="emit-container">
    <div class="emit-label">emit触发</div>
    <button class="emit-button" @click="onchangeEmit">点击</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['update:demoEmit']);
const onchangeEmit = () => {
  emit('update:demoEmit', 'emit触发 ===1 ');
};
</script>

<style lang="less" scoped>
.emit-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #f0f9ff 0%, #fef3c7 100%);
  border-radius: 10px;
  border: 1px solid rgba(59, 130, 246, 0.2);

  .emit-label {
    font-size: 14px;
    font-weight: 500;
    color: #475569;
    margin: 0;
  }

  .emit-button {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    border: none;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
