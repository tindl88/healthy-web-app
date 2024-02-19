'use client';

import React from 'react';

import BodyChart from '@/components/common/body-chart/body-chart';
import NoSsr from '@/components/common/no-ssr/no-ssr';

const BodyFatRecordGraph = () => {
  return (
    <div className="bg-dark-500 px-6 py-4 mt-14">
      <div className="flex items-center text-white">
        <h3 className="text-[15px] leading-[18px]">
          BODY
          <br />
          RECORD
        </h3>
        <p className="ml-6 text-[22px] leading-[27px]">2021.05.21</p>
      </div>
      <NoSsr>
        <BodyChart
          margin={{ left: 30, right: 30 }}
          width={912}
          height={185}
          data={[
            { name: '1月', value1: 27, value2: 25 },
            { name: '2月', value1: 25, value2: 20 },
            { name: '3月', value1: 18, value2: 12 },
            { name: '4月', value1: 16, value2: 16 },
            { name: '5月', value1: 14, value2: 17 },
            { name: '6月', value1: 12, value2: 15 },
            { name: '7月', value1: 8, value2: 10 },
            { name: '8月', value1: 7, value2: 6 },
            { name: '9月', value1: 9, value2: 12 },
            { name: '10月', value1: 11, value2: 15 },
            { name: '11月', value1: 6, value2: 7 },
            { name: '12月', value1: 4, value2: 3 }
          ]}
        />
      </NoSsr>
      <div className="flex space-x-4">
        <button className="bg-white px-5 py-0 text-[15px] text-primary-300 leading-[22px] rounded-xl hover:bg-primary-300 hover:text-white">
          日
        </button>
        <button className="bg-white px-5 py-0 text-[15px] text-primary-300 leading-[22px] rounded-xl hover:bg-primary-300 hover:text-white">
          週
        </button>
        <button className="bg-white px-5 py-0 text-[15px] text-primary-300 leading-[22px] rounded-xl hover:bg-primary-300 hover:text-white">
          月
        </button>
        <button className="bg-primary-300 text-white px-5 py-0 text-[15px] leading-[22px] rounded-xl hover:bg-primary-300 hover:text-white">
          年
        </button>
      </div>
    </div>
  );
};

export default BodyFatRecordGraph;
