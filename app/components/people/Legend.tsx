export default function Legend() {
  return (
    <div>
      <p className="font-power font-bold text-sm"> LEGEND</p>
      <ul id="key" className="font-power text-end text-sm">
        <div className="   flex flex-row ">
          <div className="basis-1/2 ">
            <div className="flex flex-row gap-4 items-center ">
              <img
                src="/images/people/extras/key-1.png"
                alt="Annotated diagram"
                className="w-auto h-7 object-cover"
              />
              <li className="pb-2"> All sources</li>
            </div>

            <div className="flex flex-row gap-5 items-start ">
              <img
                src="/images/people/extras/key-2.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Speck</li>
            </div>

            <div className="flex flex-row gap-6 items-center ">
              <img
                src="/images/people/extras/key-3.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Howley</li>
            </div>
            <div className="flex flex-row gap-6 items-start ">
              <img
                src="/images/people/extras/key-3.5.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Shanawdithit </li>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="flex flex-row gap-5 items-start ">
              <img
                src="/images/people/extras/key-4.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2">Unrecorded history </li>
            </div>
            <div className="flex flex-row gap-5 items-start ">
              <img
                src="/images/people/extras/key-5.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Recorded history </li>
            </div>
            <div className="flex flex-row gap-5 items-start ">
              <img
                src="/images/people/extras/key-6.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Source </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
