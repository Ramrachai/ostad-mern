import Hero from "./sections/Hero/Hero";
import WorkList from "./sections/WorkList/WorkList"
import StatList from "./sections/StatList/StatList"
import FeaturedProjects from "./sections/FeaturedProject/FreaturedProject"


export default function Home() {
    return (
        <div>
            <Hero />
            <WorkList />
            <StatList />
            <FeaturedProjects />
        </div>
    )
}
