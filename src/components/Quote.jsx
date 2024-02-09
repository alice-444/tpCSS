const Quote = ({ quote, author }) => {
  return (
    <div className="mx-4 my-5">
      <div className="rounded-xl  ">
        <div className="border-2 border-black p-5 rounded-xl relative">
          <div className="flex items-center justify-center mb-4">
            <p className="text-md text-gray-900 font-semibold uppercase">
              {quote}
            </p>
          </div>
          {author && (
            <div className="absolute bottom-0 right-0 mb-2 mr-2">
              <p className="text-md text-gray-800 font-semibold uppercase">
                {author}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
