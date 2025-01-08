import { PageContent } from "@/components/layout/pagecontent";
import TopNav from "@/components/layout/topnav";

export default function Page() {
  return (
    <div>
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Profile</div>
        <div className="w-1/3 flex justify-end"></div>
      </TopNav>
      <PageContent></PageContent>
    </div>
  );
}
