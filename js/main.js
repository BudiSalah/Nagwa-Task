(function statistics() {
  statisticsInstance("chart-statistic", 81, "#4A3274");
  statisticsInstance("chart-statistic-2", 50, "#739500", 90);
  statisticsInstance("chart-statistic-3", 93, "#950086");
})();

(function studentChart() {
  var dom = document.getElementById("chart-container");
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  var option;

  let xAxisData = [];
  let data1 = [];
  let data2 = [];

  for (let i = 0; i < 10; i++) {
    xAxisData.push("Class" + i);
    data1.push(+(Math.random() * 2).toFixed(2));
    data2.push(+Math.random().toFixed(2));
  }

  var itemStyle = {
    emphasis: {
      shadowBlur: 10,
      shadowColor: "rgba(0,0,0,0.3)",
    },
    normal: {
      borderWidth: 1.5,
      barBorderRadius: [50, 50, 0, 0],
    },
  };

  option = {
    legend: {
      data: ["Adam", "Average"],
      left: "0",
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false },
    },
    yAxis: {},
    grid: {
      left: 30,
      right: 20,
      bottom: 20,
    },
    series: [
      {
        name: "Adam",
        type: "bar",
        stack: "one",
        itemStyle: {
          ...itemStyle,
          normal: {
            ...itemStyle.normal,
            color: "rgba(2, 107, 176, 10%)",
            borderColor: "#026bb0",
          },
        },
        data: data1,
      },
      {
        name: "Average",
        type: "bar",
        stack: "two",
        itemStyle: {
          ...itemStyle,
          normal: {
            ...itemStyle.normal,
            color: "rgba(52, 52, 52, 10%)",
            borderColor: "#969696",
          },
        },
        data: data2,
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
})();

function statisticsInstance(target, value, color, startAngle = 180) {
  var chartDom = document.getElementById(target);
  var myChart = echarts.init(chartDom, null, {
    width: 120,
    height: 120,
  });
  var option;

  const gaugeData = [
    {
      value,
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        borderWidth: 0,
        offsetCenter: ["0%", "5%"],
        fontSize: 20,
      },
    },
  ];
  option = {
    series: [
      {
        type: "gauge",
        startAngle,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 0,
          },
        },
        axisLine: {
          lineStyle: {
            width: 3,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        itemStyle: {
          color,
        },
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: "auto",
          borderColor: "auto",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
  };

  option && myChart.setOption(option);
}
