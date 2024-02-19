'use client';

import React, { FC } from 'react';
import classNames from 'classnames';

import { ExerciseItem as Item } from '../interfaces/my-exercise.interface';

import ExerciseItem from './exercise-item';

type ExerciseListProps = {
  className?: string;
};

const categories: Item[] = [
  { id: '1', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '2', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '3', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '4', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '5', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '6', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '7', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '8', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '9', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '10', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '11', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '12', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '13', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '14', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '15', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' },
  { id: '16', name: '家事全般 (立位・軽い)', energy: '27kcal', duration: '10 min' }
];

const ExerciseList: FC<ExerciseListProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('exercise-list text-white bg-dark-500 py-4 px-6', className)} {...rest}>
      <div className="flex items-center">
        <h3 className="text-[15px] leading-[18px]">
          MY
          <br />
          EXERCISE
        </h3>
        <p className="ml-6 text-[22px] leading-[27px]">2021.05.21</p>
      </div>
      <div className="scrollbar h-[192px]">
        <div className="grid grid-cols-2 gap-x-10 pr-6">
          {categories.map(item => {
            return <ExerciseItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
