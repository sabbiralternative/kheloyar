const MultiMarkets = () => {
  return (
    <div className="flex-1 flex white bg-gray1">
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="w-full">
              <div className=" ">
                <div className="pb-10">
                  <div className="flex justify-between items-center gap-3 text-white bg-black1 px-2 py-1.5 md:py-1">
                    Multi Market
                  </div>
                  <div className="no-data multimarket-no-data bg-white border-gray-600 rounded-md p-4 m-2 text-gray-500 font-bold text-center">
                    There are currently no followed multi markets.
                    <div className="h-[1px] w-full bg-gray-200 my-2" />
                    <div className="text-center font-medium text-gray-400">
                      Please add some markets from events
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MultiMarkets;
