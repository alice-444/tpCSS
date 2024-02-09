const Quote = ({ quote, author }) => {
  return (
    <div className="mx-4">
      <div className="border border-accent border-opacity-10 rounded-lg overflow-hidden">
        <div className="border-2 border-black border-opacity-20 p-4">
          <div className="flex items-center justify-center">
            <p className="text-md text-gray-700 font-semibold uppercase">
              {quote}
            </p>
          </div>
          {author && (
            <div className="flex items-center justify-center mt-2">
              <p className="text-sm text-gray-500 font-semibold uppercase">
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
