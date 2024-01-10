import Banner from "@/components/Banner";
import MemberCard from "@/components/MemberCard/MemberCard";
import { members } from "@/constants";

export default function page() {
  return (
    <div>
      <Banner title='members' subtitle='Uniting Members in a Community of Excellence.' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-7 relative top-[64vh]">
        {
          members.map((member) => (
            <MemberCard member={member} />
          ))
        }
      </div>

    </div>
  )
}
