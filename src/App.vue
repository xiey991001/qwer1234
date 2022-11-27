<template>
  <div class="box">
    <div style="color: #009cc9" class="box-left">
      <div>较上日+ {{ store.chinaAdd.localConfirmH5 }}</div>
      <div>{{ store.chinaTotal.localConfirm }}</div>
      <div>本土现有确诊</div>

      <div>较上日+ {{ store.chinaAdd.nowConfirm }}</div>
      <div>{{ store.chinaTotal.nowConfirm }}</div>
      <div>现有确诊</div>

      <div>较上日+ {{ store.chinaAdd.confirm }}</div>
      <div>{{ store.chinaTotal.confirm }}</div>
      <div>累计确诊</div>

      <div>较上日+ {{ store.chinaAdd.noInfect }}</div>
      <div>{{ store.chinaTotal.noInfect }}</div>
      <div>无症状感染者</div>

      <div>较上日+ {{ store.chinaAdd.importedCase }}</div>
      <div>{{ store.chinaTotal.importedCase }}</div>
      <div>境外输入</div>

      <div>较上日+ {{ store.chinaAdd.dead }}</div>
      <div>{{ store.chinaTotal.dead }}</div>
      <div>累计死亡</div>
    </div>
    <div id="china" class="box-center"></div>
    <div style="color: #009cc9" class="box-right">
      <table border="1" cellspacing="0" class="table">
        <thead>
          <tr>
            <th>地 区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治 愈</th>
            <th>死 亡</th>
          </tr>
        </thead>
        <!-- <transition-group class="animate__animated animate__bounce" tag="tbody"> -->
        <tbody
          :key="item.name"
          v-for="item in store.item"
          class="animate__animated animate__bounce"
        >
          <tr>
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.today.confirm }}</td>
            <td align="center">{{ item.total.confirm }}</td>
            <td align="center">{{ item.total.heal }}</td>
            <td align="center">{{ item.total.dead }}</td>
          </tr>
        </tbody>
        <!-- </transition-group> -->
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "./stores";
import * as echarts from "echarts";
import "../public/china.js";
import { geoCoordMap } from "./assets/geoMap";
import "animate.css";

const store = useStore();
console.log(store.chinaAdd);
onMounted(async () => {
  await store.getList();
  initCharts();
});

const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children;
  // 默认展示数据
  store.item = city[1].children;

  const data = city.map((v) => {
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm),
      children: v.children,
    };
  });

  const charts = echarts.init(document.querySelector("#china") as HTMLElement);

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        // normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            // normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            // },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          // normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          // },
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: [45, 45],
        label: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2];
          },
        },
        itemStyle: {
          color: "#f67", //标志颜色
        },
        data: data,
      },
    ],
  });

  charts.on("click", (e: any) => {
    store.item = e.data.children;
  });
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
.box {
  height: 100%;
  display: flex;
  background: url(/1.jpg) no-repeat;
  background-size: 100% 100%;
  &-left {
    width: 400px;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 400px;
    overflow: auto;
  }
}
.table {
  width: 100%;
  background-color: slategrey;
  tr {
    th {
      padding: 5px;
      word-spacing: nowrap;
    }
    td {
      padding: 5px 10px;
      width: 100px;
      word-spacing: nowrap;
    }
  }
}
</style>
