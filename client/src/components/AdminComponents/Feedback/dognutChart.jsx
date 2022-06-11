import React, { useEffect, useState } from 'react'
import DonutChart from 'react-donut-chart';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFacultyFeedback } from '../../../Redux/Reducer/Feedback/feedback.action';

const DognutChart = () => {
  const { type } = useParams();
  const [ values, setValues ] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFacultyFeedback(type))
  }, [])
  const reduxState = useSelector((globalState) => globalState.Feedback)
  console.log(reduxState.feedback.rating);
  useEffect(() => {
    reduxState?.feedback && setValues(reduxState.feedback.rating)
  }, [reduxState])
  console.log(values);
  return ( 
        <DonutChart
            data={[
                {
                label: 'Excellent',
                value: values ? values?.[0] : 0,
                },
                {
                label: 'Good',
                value: values ? values?.[1] : 0,
                },
                {
                  label: 'Moderate',
                  value: values ? values?.[2] : 0,
                  
                },
                {
                  label: 'Unsatisfied',
                  value: values ? values?.[3] : 0,
                  
                },
                {
                  label: 'Poor',
                  value: values ? values?.[4] : 0,                  
                }
            ]}
        />
  )
}

export default DognutChart