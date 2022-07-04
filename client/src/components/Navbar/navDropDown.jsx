import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export const StaffDropdownRender = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [value, setValue] = useState("");
  const { type } = useParams();
  // let menuRef = useRef();
  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //       setIsDropDownOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });
  let domNode = useClickOutside(() => {
    setIsDropDownOpen(false);
  });

  return (
    <>
      <div ref={domNode} class="dropdown inline-block relative">
        <button
          class="w-full text-gray-50 font-semibold py-2 px-4 rounded inline-flex items-center"
          onClick={(event) => {
            setIsDropDownOpen((prev) => !prev);
          }}
        >
          <span class="mr-1" id="nav_items">
            {/* {props.name === "Teaching Staff" &&
            (type === "faculty" || type === "visitingfaculty" || type === "pg")
              ? type
              : props.name} */}
            {props.name}
          </span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        {isDropDownOpen && (
          <ul class="dropdown-menu absolute w-44 text-gray-700 w-full">
            {props.data.map((data) => (
              <li class="">
                <Link
                  to={`/${data.path}`}
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  <button
                    value={`${data.name}`}
                    onClick={(event) => {
                      console.log(event.target.value);
                      setValue(data.name);
                    }}
                  >
                    {data.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export const EventsDropdownRender = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [value, setValue] = useState("");
  const { type } = useParams();
  let domNode = useClickOutside(() => {
    setIsDropDownOpen(false);
  });

  return (
    <>
      <div ref={domNode} class="dropdown inline-block relative">
        <button
          class="w-full text-gray-50 font-semibold py-2 px-4 rounded inline-flex items-center"
          onClick={(event) => {
            setIsDropDownOpen((prev) => !prev);
          }}
        >
          <span class="mr-1" id="nav_items">
            {props.name === "Events" && (type === "events" || type === "cms")
              ? type
              : props.name}
          </span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        {isDropDownOpen && (
          <ul class="dropdown-menu absolute w-44 text-gray-700 w-full">
            {props.data.map((data) => (
              <li class="">
                <Link
                  to={`/${data.path}`}
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  <button
                    value={`${data.name}`}
                    onClick={(event) => {
                      console.log(event.target.value);
                      setValue(data.name);
                    }}
                  >
                    {data.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
