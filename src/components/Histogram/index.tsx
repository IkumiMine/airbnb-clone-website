import React, { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };
const BUCKET_NUMBER = 70;
const BUCKET_PADDING = 1;

type HistogramProps = {
  width: number;
  height: number;
  priceData: number[];
};

const Histogram = ({ width, height, priceData }: HistogramProps) => {

    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    const xScale = useMemo(() => {
        const max = Math.max(...priceData);
        return d3
          .scaleLinear()
          .domain([0, max])
          .range([10, boundsWidth]);
    }, [priceData, width]);

    const buckets = useMemo(() => {
        if (!xScale) return [];
        const bucketGenerator = d3
          .bin()
          .value((d) => d)
          .domain(xScale.domain())
          .thresholds(xScale.ticks(BUCKET_NUMBER));
        return bucketGenerator(priceData);
    }, [xScale, priceData]);

    const yScale = useMemo(() => {
        const max = Math.max(...buckets.map((bucket) => bucket?.length));
        return d3.scaleLinear().range([height, 0]).domain([0, max]).nice();
    }, [buckets, height]);

    // Render the X axis using d3.js, not react
    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll("*").remove();

        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
        .append("g")
        .attr("transform", "translate(0," + boundsHeight + ")")
        .call(xAxisGenerator);

        // const yAxisGenerator = d3.axisLeft(yScale);
        // svgElement.append("g").call(yAxisGenerator);

    }, [xScale, boundsHeight]);

    const allRects = buckets.map((bucket, i) => {
        if (bucket.x0 == undefined || bucket.x1 == undefined) {
          return null;
        }
        return (
          <rect
            key={i}
            fill="#e31c5f"
            stroke="#e31c5f"
            x={xScale(bucket.x0) + BUCKET_PADDING / 2}
            width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
            y={yScale(bucket.length)}
            height={height - yScale(bucket.length)}
          />
        );
    });
    
    return (
    <svg width={width} height={height}>
        <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
            {allRects}
        </g>
        {/* <g
        width={boundsWidth}
        height={boundsHeight}
        ref={axesRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        /> */}
    </svg>
    );
};

export default Histogram;