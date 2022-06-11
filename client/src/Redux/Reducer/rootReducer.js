import { combineReducers } from "redux";

import project from "./Projects/project.reducer";
import gallery from "../Reducer/Gallery/gallery.reducer";
import brochure from "../Reducer/Brochure/brochure.reducer";
import achievement from "../Reducer/Achivements/achievements.reducer";
import event from "../Reducer/Events/event.reducer";
import faculty from "../Reducer/Faculty/faculty.reducer";
import visitingFaculty from "../Reducer/VisitingFaculty/visitingFaculty.reducer";
import pg from "../Reducer/Pg/pg.reducer";
import user from "../Reducer/User/user.reducer";
import AuthReducer from "../Reducer/Auth/auth.reducer";
import Slider from "../Reducer/Slider/slider.reducer";
import Feedback from "../Reducer/Feedback/feedback.reducer";
import errors from "../Reducer/Errors/error.reducer";


const rootReducer = combineReducers({
    project,
    gallery,
    brochure,
    achievement,
    event,
    faculty,
    visitingFaculty,
    pg,
    user,
    AuthReducer,
    Slider,
    Feedback,
    errors,
});

export default rootReducer;