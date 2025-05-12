export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-10]">
      <div className="absolute bg-[#F5F5F5] inset-0 z-[-2]" />
      <div className="wave bg-[#fb1] opacity-20 bottom-0 left-0 z-[-1] animate-wave" />
      <div className="wave wave2 bg-[#fb1] opacity-20 bottom-[-1.25em] left-0 z-[-1] animate-wave" />
      <div className="wave wave3 bg-[#fb1] opacity-20 bottom-[-2.5em] left-0 z-[-1] animate-wave" />
    </div>
  );
}
