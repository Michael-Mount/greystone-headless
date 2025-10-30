import BasicBtn from "../../Buttons/BasicBtn/BasicBtn";

export default function SplitColList({
  room,
  para,
  note,
  title,
  list = [],
  bookbtn,
  link,
}) {
  return (
    <section className="bg-[#e9ecef] px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:gap-16">
        {/* LEFT COLUMN */}
        <div className="md:flex-1 text-[#00486b] leading-relaxed">
          {room && <p className="text-lg md:text-xl mb-8">{room}</p>}
          {para && <p className="text-lg md:text-xl mb-8">{para}</p>}
          {note && <p className="italic text-base md:text-lg">{note}</p>}
          <BasicBtn bg="blue-btn" title={bookbtn} link={link} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-[34%] border-l border-[#00486b]/40 pl-8">
          {title && (
            <p className="text-[#00486b] text-lg md:text-xl font-semibold tracking-wide uppercase mb-5">
              {title}
            </p>
          )}
          <ul className="space-y-3 text-[#00486b]">
            {list.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-2 inline-block h-[3px] w-[3px] rounded-full bg-[#00486b]"></span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
