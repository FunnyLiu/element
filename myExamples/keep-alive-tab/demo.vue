<template>
  <div>
    <!-- 核心逻辑 -->
    <el-tabs v-model="activeName" style="margin-top:15px;" type="card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      ></el-tab-pane>
    </el-tabs>
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <component :is="activeName"></component>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import uvTechnicalShortInput from "./input.vue";
import uvTechnicalShortRevert from "./revert.vue";
import uvTechnicalShortList from "./list.jsx";
import uvTechnicalShortData from "./data.vue";
export default {
  name: "UvTechnicalShort",
  components: {
    uvTechnicalShortInput,
    uvTechnicalShortRevert,
    uvTechnicalShortList,
    uvTechnicalShortData
  },
  props: {},

  data() {
    return {
      tabMapOptions: [
        {
          label: "生成短链",
          key: "uv-technical-short-input"
        },
        {
          label: "还原短链",
          key: "uv-technical-short-revert"
        },
        {
          label: "我的短链",
          key: "uv-technical-short-list"
        },
        {
          label: "效果监控",
          key: "uv-technical-short-data"
        }
      ],
      activeName: "uv-technical-short-input"
    };
  },

  computed: {},

  methods: {}
};
</script>
