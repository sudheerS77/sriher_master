import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

const ProjectComponent = () => {
    const [projects, setProjects] = useState([]);    

    const reduxState = useSelector((globalStore) => globalStore.project);

    useEffect(() => {
        reduxState?.projects && setProjects(reduxState.projects.projects);
    }, [reduxState?.projects.projects]);

  return (
    <div>
        <div className="mx-2 md:mx-10 lg:mx-36 my-10 flex flex-col items-center gap-10">
            {projects?.map((data) => (
                <div className="flex flex-col gap-3 items-start justify-center shadow-xl px-1 md:px-4 py-2 rounded-lg border border-gray-200">
                    <div className="md:hidden h-64">
                        <img src={`${data.image}`} alt="Loading ..." className="w-full h-full rounded-md"/>
                    </div>
                    <div className='hidden md:flex flex-row items-center gap-14 lg:w-full'>
                        <div className="md:w-96 lg:w-2/5 h-64 md:h-72 ">
                            <img src={`${data.image}`} alt="Loading ..." className="w-full h-full rounded-md"/>
                        </div>
                        <div className="w-44">
                            <h3 className="text-lg font-semibold">{data.projectName}</h3>
                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{data.projectName}</h3>
                        <p className="w-full text-md text-gray-400 font-light">{data.description}</p>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default ProjectComponent;

{/* <div className="flex flex-col gap-3 items-start justify-center shadow-xl px-1 md:px-4 py-2 rounded-lg border border-gray-200">
                <div className="md:w-96 lg:w-2/5 h-64 md:h-72 ">
                    <img src="https://morgridge.org/wp-content/uploads/flamingo-comparison-1024x682.jpg" alt="Loading ..." className="w-full h-full rounded-md"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">PRoject Title</h3>
                    <p className="w-full text-md text-gray-400 font-light">Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae sunt ea fugit, quasi ratione earum laudantium delectus a, voluptatibus quos ab quisquam eos minima, sit atque molestias. Similique, quaerat obcaecati?
                    Sint nulla doloribus id molestiae esse odio pariatur quos similique corrupti laboriosam sed amet omnis illo dolor porro libero repellendus magni, ad aperiam! Odio ad eligendi quos autem aperiam recusandae?
                    Mollitia ab alias eum deserunt nulla suscipit molestiae rerum sapiente voluptates maxime temporibus nihil praesentium labore eligendi aspernatur explicabo libero beatae porro at, numquam nesciunt quam ipsa illo? Repudiandae, explicabo!
                    Earum animi, error iusto quam tenetur praesentium recusandae eos magnam quasi quisquam sunt libero vero fuga vel deleniti optio repellat dignissimos vitae adipisci, reprehenderit, voluptatum iste nisi labore laborum. Molestias.
                    Obcaecati neque laudantium consectetur esse quibusdam molestias autem architecto blanditiis ratione, illum omnis a temporibus ea accusantium at in deserunt nam vero? Inventore possimus ipsum vitae consequuntur laborum error voluptate?
                    Doloremque earum accusamus iusto excepturi ipsa deserunt doloribus deleniti perferendis quos vero architecto reprehenderit, distinctio alias, quis vel esse eaque tenetur libero reiciendis eveniet repellendus natus. Praesentium, odit aut! Incidunt.
                    Alias quas sed natus rem corrupti repellat quo nisi provident reprehenderit assumenda impedit eius sunt aperiam libero dolorem, eaque non deserunt itaque, hic molestias! Deserunt pariatur sit aspernatur eos a!
                    Velit aut ullam aliquam quaerat, maxime blanditiis ipsam inventore? Dolor saepe veritatis quo error laudantium sunt nihil at ipsa soluta tempora deleniti, voluptatum incidunt aperiam quod assumenda fuga optio. Doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi illum ut et excepturi repellat praesentium dignissimos, laudantium ducimus tempora non harum repellendus! Maiores voluptatem ut odio, sed unde corrupti nostrum.</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center shadow-xl px-1 md:px-4 py-2 rounded-lg border border-gray-200">
                <div className="md:w-96 lg:w-2/5 h-64 md:h-72 ">
                    <img src="https://morgridge.org/wp-content/uploads/flamingo-comparison-1024x682.jpg" alt="Loading ..." className="w-full h-full rounded-md"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">PRoject Title</h3>
                    <p className="w-full text-md text-gray-400 font-light">Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae sunt ea fugit, quasi ratione earum laudantium delectus a, voluptatibus quos ab quisquam eos minima, sit atque molestias. Similique, quaerat obcaecati?
                    Sint nulla doloribus id molestiae esse odio pariatur quos similique corrupti laboriosam sed amet omnis illo dolor porro libero repellendus magni, ad aperiam! Odio ad eligendi quos autem aperiam recusandae?
                    Mollitia ab alias eum deserunt nulla suscipit molestiae rerum sapiente voluptates maxime temporibus nihil praesentium labore eligendi aspernatur explicabo libero beatae porro at, numquam nesciunt quam ipsa illo? Repudiandae, explicabo!
                    Earum animi, error iusto quam tenetur praesentium recusandae eos magnam quasi quisquam sunt libero vero fuga vel deleniti optio repellat dignissimos vitae adipisci, reprehenderit, voluptatum iste nisi labore laborum. Molestias.
                    Obcaecati neque laudantium consectetur esse quibusdam molestias autem architecto blanditiis ratione, illum omnis a temporibus ea accusantium at in deserunt nam vero? Inventore possimus ipsum vitae consequuntur laborum error voluptate?
                    Doloremque earum accusamus iusto excepturi ipsa deserunt doloribus deleniti perferendis quos vero architecto reprehenderit, distinctio alias, quis vel esse eaque tenetur libero reiciendis eveniet repellendus natus. Praesentium, odit aut! Incidunt.
                    Alias quas sed natus rem corrupti repellat quo nisi provident reprehenderit assumenda impedit eius sunt aperiam libero dolorem, eaque non deserunt itaque, hic molestias! Deserunt pariatur sit aspernatur eos a!
                    Velit aut ullam aliquam quaerat, maxime blanditiis ipsam inventore? Dolor saepe veritatis quo error laudantium sunt nihil at ipsa soluta tempora deleniti, voluptatum incidunt aperiam quod assumenda fuga optio. Doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi illum ut et excepturi repellat praesentium dignissimos, laudantium ducimus tempora non harum repellendus! Maiores voluptatem ut odio, sed unde corrupti nostrum.</p>
                </div>
            </div> */}