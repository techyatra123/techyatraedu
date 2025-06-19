import InstitutionsHeader from "@/components/subpageComponents/subpageHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <InstitutionsHeader Page={"Registered Institutions"}/>
      {children}
    </div>
  );
}
