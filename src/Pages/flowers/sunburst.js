import React, { useRef, useLayoutEffect, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Sunburst = ({ chartData, chartId }) => {
  const x = useRef(null);

  //useEffect
  useLayoutEffect(() => {
    // create chart
    const chart = am4core.create(chartId, am4plugins.Sunburst);
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(98);

    //set chart Data
    chart.data = chartData;

    chart.colors.step = 1;
    chart.fontSize = 11;
    chart.innerRadius = am4core.percent(0);

    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.color = "color";
    chart.dataFields.children = "children";

    var level0SeriesTemplate = new am4plugins.SunburstSeries();
    level0SeriesTemplate.hiddenInLegend = true;
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;
    level0SeriesTemplate.labels.template.text = "{name}";

    level0SeriesTemplate.labels.template.adapter.add("rotation", function (
      rotation,
      target
    ) {
      target.maxWidth =
        target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
      target.maxHeight = Math.abs(
        ((target.dataItem.slice.arc *
          (target.dataItem.slice.innerRadius + target.dataItem.slice.radius)) /
          2) *
          am4core.math.RADIANS
      );

      return rotation;
    });

    var level1SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("1", level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.75;
    level1SeriesTemplate.hiddenInLegend = true;

    var level2SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("2", level2SeriesTemplate);
    level2SeriesTemplate.fillOpacity = 1;
    level2SeriesTemplate.hiddenInLegend = true;
    level2SeriesTemplate.labels.template.text = "{name}";

    var level3SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("3", level3SeriesTemplate);
    level3SeriesTemplate.fillOpacity = 1;
    level3SeriesTemplate.hiddenInLegend = true;
    level3SeriesTemplate.labels.template.text = "{name}";
    level3SeriesTemplate.fill = am4core.color("red");

    chart.legend = new am4charts.Legend();

    x.current = chart;

    return () => {
      chart.dispose();
    };

    ///
  }, []);

  return <div id={chartId} style={{ width: "100%", height: "500px" }}></div>;
};

export default Sunburst;
