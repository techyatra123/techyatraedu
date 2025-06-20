
export default function SubpageHeader({Page}: {Page: string}) {
  return (
    <div className="bg-gradient-to-b from-[#efe5e5] to-[#6056bb] shadow-md p-6 md:p-9 mb-6 flex flex-col items-center justify-center">
      <h3 className="font-semibold text-2xl md:text-4xl text-black  text-center">
        {Page}
      </h3>
    
    </div>
  );
}
