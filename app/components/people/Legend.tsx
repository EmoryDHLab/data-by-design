export default function Legend() {
  return (
    <div className="  min-w-[700px]">
      <p className="font-power font-bold text-sm"> LEGEND</p>
      <ul id="key" className="font-power  text-sm">
        <div className="flex flex-row gap-12">
          <div className="basis-1/2 ">
            <div className="flex flex-row gap-4 items-center ">
              <img
                src="/images/chapters/people/key-1.png"
                alt="Annotated diagram"
                className="w-auto h-7 object-cover"
              />
              <li className="pb-3"> All sources</li>
            </div>

            <div className="flex flex-row gap-5 items-center ">
              <img
                src="/images/chapters/people/key-2.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Speck</li>
            </div>

            <div className="flex flex-row gap-6 items-center ">
              <img
                src="/images/chapters/people/key-3.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Howley</li>
            </div>
            <div className="flex flex-row gap-6 items-start ">
              <img
                src="/images/chapters/people/key-3.5.png"
                alt="Annotated diagram"
                className="w-auto h-5 object-cover"
              />
              <li className="pb-2"> Shanawdithit </li>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col justify-center" id="col2">
            <div className="flex flex-row gap-3 items-center ">
              <div className="w-12 flex justify-center">
                <img
                  src="/images/chapters/people/key-4.png"
                  alt="Annotated diagram"
                  className="w-auto h-5 object-cover"
                />
              </div>
              <li className="pb-2">Unrecorded history </li>
            </div>
            <div className="flex flex-row gap-3 items-center ">
              <div className="w-12 flex justify-center">
                <img
                  src="/images/chapters/people/key-5.png"
                  alt="Annotated diagram"
                  className="w-auto h-5 object-cover"
                />
              </div>
              <li className="pb-2"> Recorded history </li>
            </div>
            <div className="flex flex-row gap-3 items-center ">
              <div className="w-12 flex justify-center">
                <img
                  src="/images/chapters/people/key-6.png"
                  alt="Annotated diagram"
                  className="w-auto h-5 object-cover"
                />
              </div>
              <li className="pb-2"> Source </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
