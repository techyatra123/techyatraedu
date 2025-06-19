import SubpageHeader from "@/components/subpageComponents/subpageHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SubpageHeader Page={"Career Roadmap"}/>
      {children}
    </div>
  );
}
