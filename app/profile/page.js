import TopNav from "@/components/topnav/topnav";

export default function Page() {
  return (
    <div>
      <TopNav>
        <div className="w-1/3 flex justify-start"></div>
        <div className="w-1/3 flex justify-center">Profile</div>
        <div className="w-1/3 flex justify-end"></div>
      </TopNav>
    </div>
  );
}
