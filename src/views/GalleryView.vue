<script setup lang="ts">
import { onMounted } from "vue";
import { useUiStore } from "@/stores/uiStore";

const uiStore = useUiStore();

onMounted(() => {
  uiStore.setCurrentPage("gallery");
});
</script>
