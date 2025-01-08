import { PageContent } from "@/components/pagecontent/pagecontent";
import TopNav from "@/components/topnav/topnav";

export default function Page() {
  return (
    <div>
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Routines</div>
        <div className="w-1/3 flex justify-end"></div>
      </TopNav>
      <PageContent></PageContent>
    </div>
  );
}
