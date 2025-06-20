import SubpageHeader from "@/components/subpageComponents/subpageHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SubpageHeader Page={"Courses"} />

      {children}
    </div>
  );
}
