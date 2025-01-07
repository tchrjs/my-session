import { PageContent } from "@/components/pagecontent/PageContent";
import TopNav from "@/components/topnav/topnav";

export default function Home() {
  return (
    <div>
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">My Sessions</div>
        <div className="w-1/3 flex justify-end"></div>
      </TopNav>
      <PageContent></PageContent>
    </div>
  );
}
