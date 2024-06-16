import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export interface IInfoBubble {
  text: string,
  href: string
}

export default async function InfoBubble({ info, color } : { info : IInfoBubble[], color : string }) {
  return (
    <div className="flex flex-row gap-2 mb-6">
      {
        info.map((info) => (
          <a
            key={ info.text }
            href={ info.href }
            className={`bg-${ color }-dark text-white px-3 py-1 rounded-lg text-sm`}
          >
            <div className="flex flex-row items-center gap-2">
              { info.text }
              {
                info.href &&
                  <ArrowTopRightOnSquareIcon className="size-3.5" />
              }
            </div>
          </a>
        ))
      }
    </div>
  );
}