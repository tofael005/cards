

const Project = ({projectData}) => {
    const { image, project, description } = projectData;
    return (
        <div>
            <div>
                <div className="border p-4 rounded-md">
                    <img className="rounded-md" src={image} alt="" />
                    <div className="mt-4">
                        <h1 className="text-3xl font-semibold my-5">{project}</h1>
                        <p className="text-left">{description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;