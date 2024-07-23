import { Suspense } from "react";
import { ProjectLoading } from "./components/Loading";
import ProjectList from "./components/ProjectList";

function Page() {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectList />
    </Suspense>
  );
}

export default Page;
