import { useEffect } from "react";
import { useState } from "react";
import Project from "../Pages/Project";



const Banner = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            {/* <img className="h-[90vh] w-full " src={banner} alt="" /> */}

            <h1 className="text-center mt-8 text-xl font-bold">Our Project</h1>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8">
                {
                    projects  && projects.map((project, index) => <Project projectData={project} key={index} />)
                }
            </div>


        </div>
    );
};

export default Banner;