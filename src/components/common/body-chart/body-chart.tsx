'use client';

import React, { FC } from 'react';
import { CartesianGrid, Line, LineChart, Text, Tooltip, XAxis } from 'recharts';

const LINE_COLORS = ['#FFCC21', '#8FE9D0'];
const LINE_STROKE_WIDTH = 3;
const LINE_DOT_STROKE_WIDTH = 3;
const CARTESIAN_GRID_COLOR = '#777777';
const CARTESIAN_GRID_STROKE_WIDTH = 1;

type BodyChartProps = {
  width: number;
  height: number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  data: {
    name: string;
    value1: number;
    value2: number;
  }[];
};

const BodyChart: FC<BodyChartProps> = ({ data, width, height, margin }) => {
  const newMargin = Object.assign({ top: 15, right: 50, bottom: 15, left: 60 }, margin);

  return (
    <div className="body-chart">
      <LineChart width={width} height={height} data={data} margin={newMargin}>
        <CartesianGrid horizontal={false} stroke={CARTESIAN_GRID_COLOR} strokeWidth={CARTESIAN_GRID_STROKE_WIDTH} />
        <XAxis
          dataKey={'name'}
          axisLine={false}
          interval={0}
          tick={e => {
            const {
              payload: { value }
            } = e;

            return (
              <>
                <Text
                  {...e}
                  fill="#FFFFFF"
                  fontSize={12}
                  lineHeight={'15px'}
                  textAnchor="middle"
                  verticalAnchor={'start'}
                  fontFamily={`"Inter", sans-serif`}
                >
                  {value.split(' ')[0]}
                </Text>
                <Text
                  {...e}
                  fill="#FFFFFF"
                  fontSize={'8px'}
                  lineHeight={'12px'}
                  fontWeight={300}
                  dx={11}
                  dy={2}
                  fontFamily={'`"Noto Sans JP", sans-serif`'}
                >
                  {value.split(' ')[1]}
                </Text>
              </>
            );
          }}
        />
        <Tooltip />
        <Line
          dataKey="value1"
          stroke={LINE_COLORS[0]}
          fill={LINE_COLORS[0]}
          strokeWidth={LINE_STROKE_WIDTH}
          dot={{
            strokeWidth: LINE_DOT_STROKE_WIDTH,
            stroke: LINE_COLORS[0],
            r: LINE_DOT_STROKE_WIDTH,
            fill: LINE_COLORS[0]
          }}
        />
        <Line
          dataKey="value2"
          stroke={LINE_COLORS[1]}
          fill={LINE_COLORS[0]}
          strokeWidth={LINE_STROKE_WIDTH}
          dot={{
            strokeWidth: LINE_DOT_STROKE_WIDTH,
            stroke: LINE_COLORS[1],
            r: LINE_DOT_STROKE_WIDTH,
            fill: LINE_COLORS[1]
          }}
        />
      </LineChart>
    </div>
  );
};

export default BodyChart;
