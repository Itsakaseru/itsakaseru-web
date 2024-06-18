export default function Video({ src }: { src: string }) {
  return (
    <div className="flex justify-center px-20">
      <iframe
        className="rounded-lg w-[800px] h-[450px]" src={`https://www.youtube-nocookie.com/embed/${ src }`}
        title="YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
}