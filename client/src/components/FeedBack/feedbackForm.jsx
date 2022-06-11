import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addUserFeedback, getFeedback } from '../../Redux/Reducer/Feedback/feedback.action';

const FeedbackhtmlForm = () => {
    const { type } = useParams();
    console.log(type);
    const [ faculty, setFaculty ] = useState([]);
    const dispatch = useDispatch(); 
    
    // useEffect(() => {
    //     dispatch(getFeedback())
    // }, [])
    
    const reduxState = useSelector((globalStore) => globalStore.Feedback)      
    console.log(reduxState.feedback.feedbackData);
    useEffect(() => {
        reduxState.feedback && setFaculty(reduxState.feedback.feedbackData);
    }, [reduxState]);

    const [ feedbackData, setFeedbackData ] = useState([        
    ]); 
    
    const handleChange = (event) => {          
        const value = event.target.value;
        setFeedbackData({
            ...feedbackData,
            [event.target.name]: value
        })        
    }
    
    console.log(feedbackData);

    const submit = (_id) => {
        const data = [
            {
                ...feedbackData,
                faculty_id: _id
            }
        ]    
        console.log(data);
        dispatch(addUserFeedback({data}))
        //const data = feedbackData;

        // const res = await axios.post("http://localhost:4000/feedback/add-feedback", data);
        // if(res.status === 200) {
        //     alert("Feedback successfully submitted");            
        // }else{
        //     alert("Please submit your Feedback again!!");
        // }       
    }
   
    const send = (_id) => {
        //setFeedbackData((prev) => ({ ...prev, faculty_id: _id }))
        //submit();
    }
  return (
    <div className="flex flex-col items-center justify-center">
        {faculty?.length > 0 ? (            
            faculty?.map((row) => (
                row.feedback_status === "Active" && (
                    <div className="flex fle-row flex-row-reverse items-start justify-around bg-cyan-900 py-6 border border-gray-200 shadow lg:mx-44 rounded-lg">        
                        <div className="w-1/2">
                            <div className="w-full">
                                <img src={row.image} 
                                    alt=""
                                    className="w-full shadow-lg rounded-md"
                                />
                            </div>
                            <div className="text-center text-gray-50">
                                <h3 className="text-lg font-bold">{row.name}</h3>
                                <p className="text-sm font-light">{row.position}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start pl-4 md:items-center gap-6">
                            {/* <div>
                                <label htmlFor="">Name of the student / Faculty</label>
                                <input type="text" placeholder='name'className="transparent px-6 py-2 border-gray-100 rounded-lg"/>
                            </div> */}
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                    Name of the student / Faculty
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"                     
                                    name="name" 
                                    type="text" 
                                    placeholder="Username" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="email" 
                                    type="email" 
                                    placeholder="email" 
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                    Affilation
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="affliation" 
                                    type="text" 
                                    placeholder="" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                    Designatin / Year of study
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="designation" 
                                    type="text" 
                                    placeholder="Username" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                    Phone Number
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="phoneNumber" 
                                    type="phone" 
                                    placeholder="98578 78985" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="flex flex-col items-start">
                                <label className="block text-gray-50 text-sm font-bold" htmlFor="username">
                                    How would you rate this program ?
                                </label>
                                {/* <select name="rate" value={feedbackData.rate} onChange={handleChange} className="w-72 md:w-96 py-1 border border-gray-400 shadow focus:outline-none focus:shadow-outline">
                                    <option value="" disabled hidden>rate the programe</option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Unsatisified">Unsatisified</option>
                                    <option value="Poor">Poor</option>       
                                </select> */}
                            <ReactStars
                                count={5}
                                size={42}
                                name="rating"
                                onChange={(e) => setFeedbackData((prev) => ({...prev, rating: e}))}
                                activeColor="#ffd700"
                            />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="username">
                                How much useful was this topic ?
                                </label>
                                <ReactStars
                                count={5}
                                size={42}
                                name="rating"
                                onChange={(e) => setFeedbackData((prev) => ({...prev, topicRating: e}))}
                                activeColor="#ffd700"
                            />
                                {/* <select name="usefulTopic" value={feedbackData.usefulTopic} onChange={handleChange} className="w-72 md:w-96 py-1 border border-gray-400 shadow focus:outline-none focus:shadow-outline">
                                    <option value="" disabled hidden>rate the programe</option>
                                    <option value="Strongly Agree">Strongly Agree</option>
                                    <option value="Agree">Agree</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Disagree">Disagree</option>
                                    <option value="Strongly Disagree">Strongly Disagree</option>       
                                </select> */}
                            </div> 
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="feedback">
                                    Any feedback to improve?
                                </label>
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="feedback"
                                    id="feedback" 
                                    type="text" 
                                    placeholder="" 
                                    onChange={handleChange}
                                    />
                            </div>               
                            <div className="flex flex-col items-start gap-2">
                                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="">
                                    Any suggestion of topics for next program?                    
                                </label>
                                {/* <textarea 
                                    value={textarea} 
                                    name="suggestion"
                                    onChange={handleChange} 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                ></textarea> */}
                                <input 
                                    className="appearance-none border border-gray-400 shadow rounded w-full py-2 px-3 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="suggestion"
                                    id="suggestion" 
                                    type="text" 
                                    placeholder="" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div>                                
                                <button                                     
                                    className="p-2 text-xl font-bold bg-green-600 rounded-lg w-96 text-gray-50" 
                                    name="faculty_id"
                                    id='faculty_id'
                                    onClick={() => {
                                        console.log("SUBMITTTTTTTTTT");
                                        console.log(row._id);
                                        submit(row._id);
                                    }}
                                    >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )
            ))
        ) : (<></>)

        }
    </div>
  )
}

export default FeedbackhtmlForm;
